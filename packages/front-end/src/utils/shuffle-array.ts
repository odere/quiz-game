const shuffleArray: <T>(sample: T[], acc?: T[]) => T[] = (
	sample = [],
	acc = []
) => {
	const sampleCopy = [...sample]
	const length = sampleCopy.length
	const randomIndex = Math.floor(Math.random() * length)

	acc.push(sampleCopy[randomIndex])
	sampleCopy.splice(randomIndex, 1)

	if (length === 1) {
		return acc
	}

	return shuffleArray(sampleCopy, acc)
	// return sampleCopy
}

export default shuffleArray
