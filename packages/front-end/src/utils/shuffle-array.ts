const shuffleArray: <T>(array: T[]) => T[] = array => {
	const shuffled = []
	let modify = array.length
	let i

	while (modify) {
		i = Math.floor(Math.random() * (modify + 1))
		modify--
		shuffled.push(array[i])
		array.splice(i, 1)
	}

	return shuffled
}

export default shuffleArray
