const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const AdministrativeOrder = function (administrativeOrder) {
   this.orderTitleId = administrativeOrder.orderTitleId;
   this.orderNumber = administrativeOrder.orderNumber;
   this.orderDescription = administrativeOrder.orderDescription;
   this.orderYear = administrativeOrder.orderYear;
   this.orderLevel = administrativeOrder.orderLevel;
   this.studentId = administrativeOrder.studentId;
   this.orderDate = administrativeOrder.orderDate;
   this.createdBy = administrativeOrder.createdBy;
};

AdministrativeOrder.create = async (newAdministrativeOrder, result) => {
   try {
      const administrativeOrder =
         await prismaInstance.administrativeOrder.create({
            data: newAdministrativeOrder,
         });

      result(null, administrativeOrder);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AdministrativeOrder.createManyOrders = async (
   newAdministrativeOrders,
   result
) => {
   try {
      console.log(newAdministrativeOrders);
      const administrativeOrder =
         await prismaInstance.administrativeOrder.createMany({
            data: newAdministrativeOrders,
         });
      let condition = newAdministrativeOrders.map((student, index) => {
         return {
            idStudent: student.idStudent,
         };
      });

      console.log(condition);
      const changeStudentStatus = prismaInstance.student.updateMany({
         where: {
            OR: condition,
         },
         data: {
            studentStatusId: newAdministrativeOrder[0].studentStatusId,
         },
      });

      // const changeStudentStatus =  await prisma.$executeRaw`UPDATE Student SET studentStatusId = ${newAdministrativeOrder.studentStatusId} WHERE emailValidated = true`

      result(null, {
         administrativeOrder: administrativeOrder,
         studentStatus: changeStudentStatus,
      });
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

// https://smart-lis.com/api/certificates/${reportName}.pdf

AdministrativeOrder.getByFilter = async (filter, result) => {
   try {
      const singleAdministrativeOrder =
         await prismaInstance.administrativeOrder.findMany({
            where: { ...filter },
            include: {
               orderTitle: true,
               student: {
                  include: {
                     yearStudy: true,
                     section: true,
                     studentSchool: true,
                     studentLevel: {
                        where: {
                           yearStudy: {
                              currentYear: true,
                           },
                        },
                        include: {
                           yearStudy: true,
                        },
                     },
                     studentGraduation: true,
                     studentImage: true,
                     studentStatus: true,
                     acceptedType: true,
                     address: {
                        include: {
                           province: {
                              select: {
                                 provinceName: true,
                              },
                           },
                        },
                     },
                  },
               },
            },
         });

      if (singleAdministrativeOrder) {
         result(null, singleAdministrativeOrder);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Administrative Order with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AdministrativeOrder.findById = async (administrativeId, result) => {
   try {
      const singleAdministrativeOrder =
         await prismaInstance.administrativeOrder.findUnique({
            where: {
               idAdministrative: JSON.parse(administrativeId),
            },
            include: {
               orderTitle: true,
               student: {
                  include: {
                     yearStudy: true,
                     section: true,
                     studentSchool: true,
                     studentLevel: {
                        where: {
                           yearStudy: {
                              currentYear: true,
                           },
                        },
                        include: {
                           yearStudy: true,
                        },
                     },
                     studentGraduation: true,
                     studentImage: true,
                     studentStatus: true,
                     acceptedType: true,
                     address: {
                        include: {
                           province: {
                              select: {
                                 provinceName: true,
                              },
                           },
                        },
                     },
                  },
               },
            },
         });

      if (singleAdministrativeOrder) {
         result(null, singleAdministrativeOrder);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Administrative Order with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AdministrativeOrder.getAll = async (result) => {
   try {
      const administrativeOrders =
         await prismaInstance.administrativeOrder.findMany({
            include: {
               orderTitle: true,
               student: {
                  include: {
                     yearStudy: true,
                     section: true,
                     studentSchool: true,
                     studentLevel: {
                        where: {
                           yearStudy: {
                              currentYear: true,
                           },
                        },
                        include: {
                           yearStudy: true,
                        },
                     },
                     studentGraduation: true,
                     studentImage: true,
                     studentStatus: true,
                     acceptedType: true,
                     address: {
                        include: {
                           province: {
                              select: {
                                 provinceName: true,
                              },
                           },
                        },
                     },
                  },
               },
            },
         });
      result(null, administrativeOrders);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AdministrativeOrder.updateManyOrder = async (administrativeOrder, result) => {
   let data = {
      orderTitleId: administrativeOrder.orderTitleId * 1,
      orderNumber: administrativeOrder.orderNumber,
      orderDescription: administrativeOrder.orderDescription,
      orderYear: administrativeOrder.orderYear * 1,
      orderLevel: administrativeOrder.orderLevel,
      orderDate: new Date(administrativeOrder.orderDate),
   };

   try {
      const updateAdministrativeOrder =
         await prismaInstance.administrativeOrder.updateMany({
            where: {
               orderNumber: data.orderNumber,
               AND: {
                  orderYear: data.orderYear,
               },
            },
            data: data,
         });
      result(null, updateAdministrativeOrder);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

AdministrativeOrder.updateById = async (
   administrativeId,
   administrativeOrder,
   result
) => {
   try {
      const updateAdministrativeOrder =
         await prismaInstance.administrativeOrder.update({
            where: { idAdministrative: JSON.parse(administrativeId) },
            data: administrativeOrder,
         });
      result(null, updateAdministrativeOrder);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

AdministrativeOrder.remove = async (id, result) => {
   try {
      const deleteAdministrativeOrder =
         await prismaInstance.administrativeOrder.delete({
            where: { idAdministrative: JSON.parse(id) },
         });
      result(null, deleteAdministrativeOrder);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

AdministrativeOrder.removeAll = async (result) => {
   try {
      const deleteAllAdministrativeOrders =
         await prismaInstance.administrativeOrder.deleteMany({});
      result(null, deleteAllAdministrativeOrders);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

AdministrativeOrder.removeAllByOrderNumber = async (
   orderNumber,
   orderYear,
   result
) => {
   try {
      const deleteAllAdministrativeOrders =
         await prismaInstance.administrativeOrder.deleteMany({
            where: {
               orderNumber: orderNumber,
               AND: {
                  orderYear: orderYear,
               },
            },
         });
      result(null, deleteAllAdministrativeOrders);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = AdministrativeOrder;
