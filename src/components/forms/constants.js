const impetus_domains = [
	{ value: "", label: "Select Option" },
	{ value: "AD", label: "Application Development (AD)" },
	{ value: "CN", label: "Communication Networks and Security Systems (CN)" },
	{ value: "DSP", label: "Digital / Image/ Speech / Video Processing (DS)" },
	{ value: "ES", label: "Embedded/VLSI Systems (ES)" },
	{ value: "ML", label: "Machine Learning and Pattern Recognition (ML)" },
	{ value: "OT", label: "Other (OT)" },
];

const nova_domains = [
	{ value: "", label: "Select Option" },
	{ value: "AR", label: "Game Development (Arena)" },
	{ value: "MS", label: "Game Development (Mindscape)" },
	{ value: "DE", label: "3D Design" },
]

const yearOptions = [
	{ value: "", label: "Select Year" },
	{ value: "FE", label: "First Year" },
	{ value: "SE", label: "Second Year" },
	{ value: "TE", label: "Third Year" },
];

const yearOptionsNova = [
	{ value: "", label: "Select Year" },
	{ value: "FE", label: "First Year" },
	{ value: "SE", label: "Second Year" },
	{ value: "TE", label: "Third Year" },
	{ value: "BE", label: "Fourth Year" },
];

const yearOptionsConcepts = [
	{ value: "", label: "Select Year" },
	{ value: "BE", label: "Final Year" }
]

const localityOptions = [
	{ value: "1", label: "Urban" },
	{ value: "0", label: "Rural" }
];

const modeOptions = [
	{ value: "1", label: "Offline" },
	{ value: "0", label: "Online" }
];

const yesNoOptions = [
	{ value: "1", label: "Yes" },
	{ value: "0", label: "No" }
];

const getJudgingSlots = (event_name) => {
	const judgingSlotsImpetus = [
		{ value: "1", label: "Friday, 21st March (11:00 AM - 2:00 PM)" },
		{ value: "2", label: "Friday, 21st March (2:00 PM - 5:00 PM)"},
		{ value: "3", label: "Friday, 21st March (5:00 PM - 7:00 PM)"},
		{ value: "4", label: "Saturday, 22nd March (9:00 AM - 12:00 PM)" },
		{ value: "5", label: "Saturday, 22nd March (1:00 PM - 3:00 PM)" },
		{ value: "6", label: "Saturday, 22nd March (4:00 PM - 6:00 PM)" },
	];


const judgingSlotsConcepts = [
  { value: "1", label: "Friday, 21st March (11:00 AM - 2:00 PM)" },
  { value: "2", label: "Friday, 21st March (2:00 PM - 4:00 PM)"},
  { value: "3", label: "Friday, 21st March (4:00 PM - 7:00 PM)"},
  { value: "4", label: "Saturday, 22nd March (10:00 AM - 1:00 PM)" },
  { value: "5", label: "Saturday, 22nd March (1:00 PM - 4:00 PM)" },
  { value: "6", label: "Saturday, 22nd March (4:00 PM - 7:00 PM)" },
];

	if(event_name === 'impetus'){
		return judgingSlotsImpetus;
	}
	else if(event_name === 'concepts'){
		return judgingSlotsConcepts;
	}
}

export { impetus_domains, yearOptions, localityOptions, modeOptions, yesNoOptions, yearOptionsConcepts, nova_domains, yearOptionsNova, getJudgingSlots, }