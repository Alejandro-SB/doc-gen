export const dniGenerator = (): string => {
  const letterMap = "TRWAGMYFPDXBNJZSQVHLCKE".split("");

  const n = generateNumber(1e7, 99_999_999);

  const letter = letterMap[n % 23];

  return n.toString() + letter;
};

const generateNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const CountryCodes = ["ES"] as const;

export type CountryCode = (typeof CountryCodes)[number];

export const ibanGenerator = (countryCode: CountryCode) => {
  throw new Error("Not implemented");
};
