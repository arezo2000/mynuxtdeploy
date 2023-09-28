export default async () => {
  const course = await useCourse();
  return course.value.chatpers[0].lessons[0];
};