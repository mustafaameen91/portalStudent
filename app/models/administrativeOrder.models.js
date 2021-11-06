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
      let studentStatusId = newAdministrativeOrders[0].studentStatusId;
      let adminData = newAdministrativeOrders.map((order) => {
         return {
            orderTitleId: order.orderTitleId * 1,
            orderNumber: order.orderNumber,
            orderDescription: order.orderDescription,
            orderYear: order.orderYear * 1,
            orderLevel: order.orderLevel * 1,
            studentId: order.studentId * 1,
            orderDate: new Date(order.orderDate),
            createdBy: order.createdBy * 1,
         };
      });

      const administrativeOrder =
         await prismaInstance.administrativeOrder.createMany({
            data: adminData,
         });

      let condition = newAdministrativeOrders.map((student, index) => {
         return student.studentId;
      });

      const changeStudentStatus = await prismaInstance.student.updateMany({
         where: {
            idStudent: { in: condition },
         },
         data: {
            studentStatusId: studentStatusId,
         },
      });

      result(null, {
         administrativeOrder: administrativeOrder,
         studentStatus: changeStudentStatus,
      });
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AdministrativeOrder.createManyOrdersUpgrade = async (
   newAdministrativeOrders,
   result
) => {
   try {
      let studentStatusId = newAdministrativeOrders[0].studentStatusId;
      let adminData = newAdministrativeOrders.map((order) => {
         return {
            orderTitleId: order.orderTitleId * 1,
            orderNumber: order.orderNumber,
            orderDescription: order.orderDescription,
            orderYear: order.orderYear * 1,
            orderLevel: order.orderLevel * 1,
            studentId: order.studentId * 1,
            orderDate: new Date(order.orderDate),
            createdBy: order.createdBy * 1,
         };
      });

      const administrativeOrder =
         await prismaInstance.administrativeOrder.createMany({
            data: adminData,
         });

      let condition = newAdministrativeOrders.map((student, index) => {
         return student.studentId;
      });

      let studentLevels = newAdministrativeOrders.map((student, index) => {
         return {
            studentId: student.studentId,
            level: student.level,
            yearStudyId: student.yearStudyId,
            class: student.class,
         };
      });

      const changeStudentStatus = await prismaInstance.student.updateMany({
         where: {
            idStudent: { in: condition },
         },
         data: {
            studentStatusId: studentStatusId,
         },
      });

      const studentsLevel = await prismaInstance.studentLevel.createMany({
         data: studentLevels,
      });

      console.log({
         administrativeOrder: administrativeOrder,
         studentStatus: changeStudentStatus,
         studentLevel: studentsLevel,
      });

      result(null, {
         administrativeOrder: administrativeOrder,
         studentStatus: changeStudentStatus,
         studentLevel: studentsLevel,
      });
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

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

   let condition = administrativeOrder.studentIds;
   let studentStatusId = administrativeOrder.studentStatusId;

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

      const changeStudentStatus = await prismaInstance.student.updateMany({
         where: {
            idStudent: { in: condition },
         },
         data: {
            studentStatusId: studentStatusId,
         },
      });

      result(null, {
         AdministrativeOrderUpdated: updateAdministrativeOrder,
         studentStatus: changeStudentStatus,
      });
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
