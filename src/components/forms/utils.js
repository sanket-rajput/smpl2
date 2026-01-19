
const validate_isEmpty = {
	bool: (value) => (!value),
	message: (msg) => (msg || 'Field Cannot be empty'),
}

const validate_email = {
	bool: (value) => (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)),
	message: (msg) => (msg || 'Enter a Valid Email ID'),
}

const validate_phone = {
	bool: (value) => (!/^(\+\d{2,3}\s\(\d{3}\)\s\d{3}-\d{4}|\(\d{3}\)\s\d{3}-\d{4}|\d{10,13})$/.test(value)),
	message: (msg) => (msg || 'Enter a Valid Phone No.'),
}

const validate_wordCount = {
	bool: (value, min, max) => (min > value || value > max), message: (msg, min, max) => (msg || `Required words between ${min} and ${max}`)
}

const validate = (event, formData) => {
	
	return validate_isEmpty.bool(formData.title) || !formData.domain || (event !== "nova" && !formData.project_type) || (event === "concepts" && (validate_isEmpty.bool(formData.guide_name) || validate_email.bool(formData.guide_email) || validate_phone.bool(formData.guide_phone))) || (formData.sponsored === "1" && validate_isEmpty.bool(formData.company)) || validate_wordCount.bool(formData.abstract.trim().split(/\s+/).length, 50, 300) || (formData.demo === "0" && validate_isEmpty.bool(formData.reason_of_demo)) || (formData.techfiesta === "1" && validate_isEmpty.bool(formData.team_id))

};

const validateMember = (member) => {

	return validate_isEmpty.bool(member.name) || validate_email.bool(member.email) || validate_phone.bool(member.phone) || validate_isEmpty.bool(member.gender) || validate_isEmpty.bool(member.member_id)

};

const validateCollegeDetails = (event, formData) => {
	return formData.isPICT === null || formData.isInternational === null || (event !== "concepts" && validate_isEmpty.bool(formData.year)) || validate_isEmpty.bool(formData.college) || validate_isEmpty.bool(formData.country) || validate_isEmpty.bool(formData.state) || validate_isEmpty.bool(formData.city) || validate_isEmpty.bool(formData.district) || validate_isEmpty.bool(formData.locality) || validate_isEmpty.bool(formData.mode) || (formData.mode === '0' && validate_isEmpty.bool(formData.reason_of_mode))
};

const validateJudgeForm = (formData) => {
  return formData.isPICT === null || validate_isEmpty.bool(formData.name) || validate_email.bool(formData.email) || validate_phone.bool(formData.phone) || validate_isEmpty.bool(formData.company) || validate_isEmpty.bool(formData.commercial_address) || validate_isEmpty.bool(formData.residential_address) || validate_isEmpty.bool(formData.exp) || validate_isEmpty.bool(formData.min_projects) || !formData.domains.length || !formData.slots.length
}

const formatPhoneNumber = (value) => {
  const numbersOnly = value.replace(/\D/g, "");

  let formatted = numbersOnly;
  if (numbersOnly.length > 3) {
    formatted = `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3)}`;
  }
  if (numbersOnly.length > 6) {
    formatted = `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(
      3,
      6
    )}-${numbersOnly.slice(6, 10)}`;
  }
  if (numbersOnly.length > 10) {
    formatted = `+${numbersOnly.slice(0, 1)} (${numbersOnly.slice(
      1,
      4
    )}) ${numbersOnly.slice(4, 7)}-${numbersOnly.slice(7, 11)}`;
  }
	if (numbersOnly.length > 11) {
    formatted = `+${numbersOnly.slice(0, 2)} (${numbersOnly.slice(
			2,
			5
		)}) ${numbersOnly.slice(5, 8)}-${numbersOnly.slice(8, 12)}`;
	}
  if (numbersOnly.length > 12){
    formatted = `+${numbersOnly.slice(0, 3)} (${numbersOnly.slice(
      3,
      6
    )}) ${numbersOnly.slice(6, 9)}-${numbersOnly.slice(9, 13)}`;
  }
  
  return {formatted, numbersOnly: numbersOnly.slice(0, 13)};
};

function generateOptions(min, max) {
  let options = []
  for (let i = min; i <= max; i++) {
      options.push({ value: i, label: i })
  }
  return options
}

export { validate, validate_isEmpty, validate_phone, validate_email, validate_wordCount, validateMember, validateCollegeDetails, formatPhoneNumber, validateJudgeForm, generateOptions, }