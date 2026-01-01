package mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getDisasterName(),
                employee.getStartDate(),
                employee.getEndDate(),
                employee.getDeathCount()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getDisasterName(),
                employeeDto.getStartDate(),
                employeeDto.getEndDate(),
                employeeDto.getDeathCount()
        );

    }
}
