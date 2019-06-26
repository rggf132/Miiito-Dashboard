import axios from "axios";

const ROOT_URL = "http://localhost/api/v1";

export const FETCH_APPLICATIONS = "fetch_applications";
export const FETCH_JOBS = "fetch_jobs";
export const FETCH_JOBS_SEARCH = "fetch_jobs_search";
export const FETCH_CURRENT_APPLICATION = "fetch_current_application";
export const FETCH_CURRENT_JOB = "fetch_current_job";

export const UPDATE_SELECTED_APPLICATION_STATUS =
  "update_selected_application_status";
export const UPDATE_SELECTED_APPLICATION = "update_selected_application";
export const FETCH_UPDATE_SELECTED_JOB = "fetch_update_selected_job";
export const FETCH_UPDATE_PUBLIC_BUSINESS = "fetch_update_public_business";

export const FETCH_UPDATE_PUBLIC_BUSINESS_TEST =
  "fetch_update_public_business_test";

export const UPDATE_JOB_SEARCH_STRING = "update_job_search_string";
export const FETCH_JOB_SEARCH_RESULTS = "fetch_job_search_results";

export const FETCH_STUDENT_USER = "fetch_student_user";
export const FETCH_BUSINESS_USER = "fetch_business_user";

export function fetchApplications() {
  const request = axios.get(`${ROOT_URL}/student_applications_test`);
  return {
    type: FETCH_APPLICATIONS,
    payload: request
  };
}

export function fetchJobs() {
  const request = axios.get(`${ROOT_URL}/student_jobs_test`);
  return {
    type: FETCH_JOBS,
    payload: request
  };
}

export function fetchJobsSearch() {
  const request = axios.get(`${ROOT_URL}/get_all_jobs_for_search`);
  return {
    type: FETCH_JOBS_SEARCH,
    payload: request
  };
}

export function fetchStudentUser() {
  return {
    type: FETCH_STUDENT_USER,
    payload: {
      fullname: "Mariyan Tenev",
      email: "mariyan.tenev@miiito.com",
      id: "1"
    }
  };
}

export function fetchBusinessUser() {
  return {
    type: FETCH_BUSINESS_USER,
    payload: {
      business_name: "Miiito Ltd",
      email: "lili.zhu@miiito.com",
      id: "1"
    }
  };
}

export function updateSelectedPublicBusiness(job_id) {
  const request = axios.get(`${ROOT_URL}/company_name_test?job_id=${job_id}`);
  return {
    type: FETCH_UPDATE_PUBLIC_BUSINESS_TEST,
    payload: request
  };
}

export function fetchCurrentApplication(application_id) {
  const request = axios.get(
    `${ROOT_URL}/get_application_per_application_id?application_id=${application_id}`
  );
  return {
    type: FETCH_CURRENT_APPLICATION,
    payload: request
  };
}

export function fetchCurrentJob(job_id) {
  const request = axios.get(`${ROOT_URL}/get_job_per_job_id?job_id=${job_id}`);
  return {
    type: FETCH_CURRENT_JOB,
    payload: request
  };
}

export function updateJobSearchString(search_string) {
  return {
    type: UPDATE_JOB_SEARCH_STRING,
    payload: search_string
  };
}

export function updateSelectedApplication(application) {
  return {
    type: UPDATE_SELECTED_APPLICATION,
    payload: application
  };
}

export function updateSelectedJob(job_id) {
  const request = axios.get(
    `${ROOT_URL}/get_application_list_per_job?job_id=${job_id}`
  );
  return {
    type: FETCH_UPDATE_SELECTED_JOB,
    payload: request
  };
}

export function fetchJobSearchResults(search_string) {
  const request = axios.get(
    `${ROOT_URL}/get_job_list_per_string?search_string=${search_string}`
  );
  console.log(request);
  return {
    type: FETCH_JOB_SEARCH_RESULTS,
    payload: request
  };
}

export function updateSelectedApplicationStatus(option) {
  var response1;
  const request = axios
    .post(`${ROOT_URL}/post_application_status`, { status: option })
    .then(function(response) {
      response1 = response;
    });
  console.log(request);
  return {
    type: UPDATE_SELECTED_APPLICATION_STATUS,
    payload: response1
  };
}
