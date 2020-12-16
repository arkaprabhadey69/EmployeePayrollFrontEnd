import Axios from "axios";

const BASE_URL='http://localhost:8080/emp/v1';
const ADD_EMPLOYEE_URL='/insert';
const GET_EMPLOYEE_URL='/list';

class EmployeeService {
    addEmployee(employee) {
        return Axios.post(BASE_URL+ADD_EMPLOYEE_URL,employee);
    }
    getEmployee() {
        return Axios.get(BASE_URL+GET_EMPLOYEE_URL);
    }
}
export default new EmployeeService();

