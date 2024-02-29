import slugify from "slugify";

/**
 * Converts human readable tokens into tailwind config friendly ones
 *
 * @param {array} tokens {name: string, value: any}
 * @return {object} {key, value}
 */

export type Token = {
  name: string;
  value: any;
};

const tokensToTailwind = (tokens: Token[]) => {
  const nameSlug = (text: string) => slugify(text, { lower: true });

  let response: Record<string, any> = {};

  tokens.forEach(({ name, value }) => {
    response[nameSlug(name)] = value;
  });

  return response;
};

export default tokensToTailwind;
