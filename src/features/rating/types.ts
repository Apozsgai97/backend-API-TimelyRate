export type Rating = {
  id: string;
  date: string;
  lessonRatings: {
    lesson1: number;
    lesson2: number;
    lesson3: number;
    lesson4: number;
  };
};

export type RatingDb = {
  getAll: () => Promise<Rating[]>;
  getById: (id: string) => Promise<Rating>;
};
