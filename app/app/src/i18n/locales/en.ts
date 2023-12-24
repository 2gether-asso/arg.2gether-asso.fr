const defaultLocale =
[
	'What is {0}?',
	'Visit our website',
	'Join our Discord',
	'You find ARGs frustrating? too long or too vague? This platform will allow you to play online to 2GETHER\'s ARGs.',
	'The principle is simple: a countdown is started before each step, then, once it is open, understand the image and text to find the code and move on to the next step!',
	'Starting in 2024, ARGs will be divided into several parts and spaced throughout the year, allowing you to be less lost and to be able to progress better without having to remember the previous 500 steps!',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>
