let employee = {
    name :"black ninja",
    streetAddress : "45 nbig jimn  road "
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value
     return employee
}
function deleteFromEmployeeByKey(employee, key){
    //let keyname=key
    let employeeCopy={...employee}
    delete employeeCopy.name
    console.log(employeeCopy)

    return employeeCopy

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    console.log(employee)

    return employee


}deleteFromEmployeeByKey(employee, "name")