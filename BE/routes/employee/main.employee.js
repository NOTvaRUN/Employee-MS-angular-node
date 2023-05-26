
let EMPLOYEE = []
class EmployeeController {

    /**
     * return all employees
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static returnAllEmployees(req, res){
        try{
            return res.status(200).json({
                status: "success",
                data: EMPLOYEE
            }); 
        } catch(err){
            console.log(err);
            return res.status(400).json({
                status: "failed",
                message: "Error returning all employees",
            });  
        }
    }


    static returnEmployee(req, res){
        try{
            return res.status(200).json({
                status: "success",
                data: EMPLOYEE.filter((element)=>{
                    if(element.id == req.params.id){
                        return true;
                    }
                })
            })
        } catch(err){
            console.log(err);
            return res.status(400).json({
                status: "failed",
                message: "Error returning employee",
            });  
        }
    }


    static addEmployee(req, res){
        try{

            EMPLOYEE.push({
                id: "emp_" + EMPLOYEE.length,
                ...req.body
            })
            return res.status(200).json({
                status: "success",
                message: "Employee created successfully",
            })  
        } catch(err){
            console.log(err);
            return res.status(400).json({
                status: "failed",
                message: "Error creating employee",
            });  
        }
    }


    static updateEmployee(req, res){
        try{
            let index = EMPLOYEE.findIndex(element => element.id == req.params.id)
            EMPLOYEE[index] = {
                id: EMPLOYEE[index].id,
                ...req.body
            }
            return res.status(200).json({
                status: "success",
                message: "Employee updated successfully",
            });  
        } catch(err){
            console.log(err);
            return res.status(400).json({
                status: "failed",
                message: "Error updating employee",
            });  
        }
    }

    static removeEmployee(req, res){
        try{
            EMPLOYEE.splice(EMPLOYEE.findIndex(element => element.id == req.params.id), 1)
            return res.status(200).json({
                status: "success",
                message: "Employee deleted successfully",
            });  
        } catch(err){
            console.log(err);
            return res.status(400).json({
                status: "failed",
                message: "Error deleting employee",
            });  
        }
    }
}

module.exports = EmployeeController;