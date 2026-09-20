import { db } from "@/lib/db";
import { withUser, getCourseSummaries } from "@/lib/api-helpers";

export async function GET(req: Request) {
  return withUser(req, async (_req, { user }) => {
    const [years, courses] = await Promise.all([
      db.year.findMany({
        orderBy: { number: "asc" },
        include: {
          semesters: {
            orderBy: { number: "asc" },
            include: { _count: { select: { courses: true } } },
          },
        },
      }),
      getCourseSummaries(user.id),
    ]);

    const tree = years.map((y) => ({
      number: y.number,
      title: y.title,
      semesters: y.semesters.map((s) => {
        const semCourses = courses.filter((c) => c.year === y.number && c.semester === s.number);
        const lessonCount = semCourses.reduce((sum, c) => sum + c.lessonCount, 0);
        const completedCount = semCourses.reduce((sum, c) => sum + c.completedCount, 0);
        const minutes = semCourses.reduce((sum, c) => sum + c.minutes, 0);
        return {
          number: s.number,
          phase: s.phase,
          courses: semCourses,
          lessonCount,
          completedCount,
          minutes,
          progressPct: lessonCount ? Math.round((completedCount / lessonCount) * 100) : 0,
        };
      }),
    }));

    return Response.json({ years: tree, user: { currentYear: user.currentYear, currentSemester: user.currentSemester } });
  });
}
