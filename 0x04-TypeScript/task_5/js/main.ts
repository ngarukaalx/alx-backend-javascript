interface MajorCredits {
	credits: number;
	brand: 'MajorCredits';
}

interface MinorCredits {
	credits: number;
	brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	const total = subject1.credits + subject2.credits;
	return {
		credits: total,
		brand: 'MajorCredits'
	};
}
function sumMinorCredits(subject1: MinorCredits,  subject2: MinorCredits): MinorCredits {
	const total = subject1.credits + subject2.credits;
	return {
		credits: total,
		brand: 'MinorCredits'
	};
}
