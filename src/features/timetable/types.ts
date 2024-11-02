export type Timetable = {
  day: string;
  lessons: {
    lesson1: string;
    lesson2: string;
    lesson3: string;
    lesson4: string;
  };
};

export type TimetableDb = {
  getAll: () => Promise<Timetable[]>;
};
