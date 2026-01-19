import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Select } from "../../ui/select";
import { Label } from "../../ui/label";
import FormButton from "../FormButton";

import {
  validate_isEmpty,
  validate_email,
  validate_phone,
  validate_wordCount,
  validate
} from "../utils";

import { impetus_domains, nova_domains } from "../constants";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import {
  resetForm,
  submit_step1,
  submit_step2,
  submit_step3
} from "../../../app/features/form/formSlice";

import Loader from "../../ui/Loader";
import scrollToTop from "../../../utils/scrollToTop";
import { formatPhoneNumber } from "../utils";

const initialState = {
  title: "",
  domain: "",
  project_type: "",
  guide_name: "",
  guide_email: "",
  guide_phone: "",
  hod_email: "",
  sponsored: "0",
  company: "",
  abstract: "",
  nda: "0",
  demo: "1",
  techfiesta: "0",
  team_id: "",
  reason_of_demo: ""
};

const ProjectDetailsFormStep = ({ event, nextStep }) => {
  const ename = window.localStorage.getItem("event_name");
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const [abstractWordCount, setAbstractWordCount] = useState(0);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    scrollToTop();
    dispatch(resetForm());
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "guide_phone") {
      const { formatted, numbersOnly } = formatPhoneNumber(value);
      setPhone(formatted);
      setFormData({
        ...formData,
        [name]: numbersOnly
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? "1" : "0") : value
    });

    if (name === "abstract") {
      setAbstractWordCount(value.trim().split(/\s+/).length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Auto-set project type for NOVA
    if (event === "nova") {
      formData.project_type = "software";
    }

    // Validation
    if (!validate(event, formData)) {
      // Save data locally (Redux)
      dispatch(submit_step1(formData));

      // Move to next step
      toast.success("Project details saved (local mode)");
      nextStep();
      return;
    }

    toast.error("Fill all the required details correctly!");
  };

  return (
    <>
      <form
        className="w-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <div className="sm:col-span-2">
          <Label htmlFor="title" required>
            Title
          </Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            validate={validate_isEmpty.bool}
            errorMessage={validate_isEmpty.message()}
            placeholder="Enter project title"
          />
        </div>

        {/* Domain */}
        <div>
          <Label htmlFor="domain" required>
            Domain
          </Label>
          <Select
            id="domain"
            value={formData.domain}
            onChange={handleChange}
            options={event === "nova" ? nova_domains : impetus_domains}
            validate={validate_isEmpty.bool}
            errorMessage={validate_isEmpty.message()}
            name="domain"
          />
        </div>

        {/* Project Type */}
        {event !== "nova" && (
          <div>
            <Label htmlFor="project_type" required>
              Type
            </Label>
            <Select
              options={[
                { value: "", label: "Select Option" },
                { value: "hardware", label: "Hardware" },
                { value: "software", label: "Software" }
              ]}
              value={formData.project_type}
              onChange={handleChange}
              validate={validate_isEmpty.bool}
              errorMessage={validate_isEmpty.message()}
              id="project_type"
              name="project_type"
            />
          </div>
        )}

        {/* Guide Name */}
        <div>
          <Label htmlFor="guide_name" required={event === "concepts"}>
            Guide Name
          </Label>
          <Input
            name="guide_name"
            id="guide_name"
            value={formData.guide_name}
            onChange={handleChange}
            validate={event === "concepts" && validate_isEmpty.bool}
            errorMessage={validate_isEmpty.message()}
            placeholder="Enter guide's name"
          />
        </div>

        {/* Guide Email */}
        <div>
          <Label htmlFor="guide_email" required={event === "concepts"}>
            Guide Email
          </Label>
          <Input
            id="guide_email"
            name="guide_email"
            value={formData.guide_email}
            onChange={handleChange}
            validate={event === "concepts" && validate_email.bool}
            errorMessage={validate_email.message()}
            placeholder="Enter guide's email"
          />
        </div>

        {/* Guide Phone */}
        <div>
          <Label htmlFor="guide_phone" required={event === "concepts"}>
            Guide Phone
          </Label>
          <Input
            id="guide_phone"
            name="guide_phone"
            value={phone}
            onChange={handleChange}
            validate={event === "concepts" && validate_phone.bool}
            errorMessage={validate_phone.message()}
            placeholder="Enter guide's phone number"
          />
        </div>

        {/* HOD Email */}
        <div>
          <Label htmlFor="hod_email">HOD Email</Label>
          <Input
            id="hod_email"
            name="hod_email"
            value={formData.hod_email}
            onChange={handleChange}
            placeholder="Enter HOD's email"
          />
        </div>

        {/* Abstract */}
        <div className="sm:col-span-2">
          <Label htmlFor="abstract" required>
            Abstract
          </Label>
          <Input
            as="textarea"
            id="abstract"
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            validate={() =>
              validate_wordCount.bool(abstractWordCount, 50, 300)
            }
            errorMessage={validate_wordCount.message("", 50, 300)}
            placeholder="Enter abstract (50-300 words)"
            rows={8}
          />
          <div className="mt-1 text-sm text-secondary">
            Word count: {abstractWordCount} (50-300 words required)
          </div>
        </div>

        {/* Techfiesta */}
        <div className="flex flex-col gap-4">
          <Label htmlFor="techfiesta" className="flex items-center gap-2">
            <input
              type="checkbox"
              name="techfiesta"
              id="techfiesta"
              checked={formData.techfiesta === "1"}
              onChange={handleChange}
              className="h-5 w-5"
            />
            Did you participate in Techfiesta?
          </Label>

          {formData.techfiesta === "1" && (
            <div>
              <Label htmlFor="team_id" required>
                Techfiesta Team ID
              </Label>
              <Input
                id="team_id"
                name="team_id"
                value={formData.team_id}
                onChange={handleChange}
                validate={validate_isEmpty.bool}
                errorMessage={validate_isEmpty.message()}
                placeholder="Eg. T4014"
              />
            </div>
          )}
        </div>

        {/* Demo */}
        <div className="flex flex-col gap-4">
          <Label htmlFor="demo" required className="flex items-center gap-2">
            <input
              type="checkbox"
              name="demo"
              id="demo"
              checked={formData.demo === "1"}
              onChange={handleChange}
              className="h-5 w-5"
            />
            Would you like to showcase your project with a demo?
          </Label>

          {formData.demo === "0" && (
            <div>
              <Label htmlFor="reason_of_demo" required>
                Reason for no demo
              </Label>
              <Input
                id="reason_of_demo"
                name="reason_of_demo"
                value={formData.reason_of_demo}
                onChange={handleChange}
                validate={validate_isEmpty.bool}
                errorMessage={validate_isEmpty.message()}
                placeholder="Enter reason for not showing a demo"
              />
            </div>
          )}
        </div>

        {/* Sponsored */}
        <div className="flex flex-col gap-4">
          <Label htmlFor="sponsored" className="flex items-center gap-2">
            <input
              type="checkbox"
              id="sponsored"
              name="sponsored"
              checked={formData.sponsored === "1"}
              onChange={handleChange}
              className="h-5 w-5"
            />
            Is the project sponsored?
          </Label>

          {formData.sponsored === "1" && (
            <div>
              <Label htmlFor="company" required>
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                validate={validate_isEmpty.bool}
                errorMessage={validate_isEmpty.message()}
                placeholder="Enter company name"
              />

              <Label htmlFor="nda" className="flex items-center gap-2 py-8">
                <input
                  type="checkbox"
                  id="nda"
                  name="nda"
                  checked={formData.nda === "1"}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
                Has NDA Signed Your Project?
              </Label>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 justify-self-end">
          <FormButton loading={false} type="submit" />
        </div>
      </form>
    </>
  );
};

export default ProjectDetailsFormStep;