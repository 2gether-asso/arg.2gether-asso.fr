import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'You find ARGs frustrating? too long or too vague? This platform will allow you to play online to 2GETHER\'s ARGs.':
		'Vous trouvez les ARGs frustrants ? trop long ou trop vague ? Cette plateforme vous permettra de jouer en ligne aux ARGs de 2GETHER.',
	'The principle is simple: a countdown is started before each step, then, once it is open, understand the image and text to find the code and move on to the next step!':
		'Le principe est simple : un compte à rebours est lancé avant chaque étape, puis, une fois celle-ci ouverte, comprenez l\'image et le texte pour trouver le code et passer à l\'étape suivante !',
	'Starting in 2024, ARGs will be divided into several parts and spaced throughout the year, allowing you to be less lost and to be able to progress better without having to remember the previous 500 steps!':
		'À partir de 2024, les ARGs seront découpés en plusieurs parties et espacés tout au long de l\'année, vous permettant d\'être moins perdu et de pouvoir mieux avancer sans avoir à vous remémorer les 500 étapes précédentes !',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>
