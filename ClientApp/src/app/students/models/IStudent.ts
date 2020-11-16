export interface IStudent {

    //student
    id: number;
    studcode: number;
    studName: string;
    studNameAr: string;
    dateOfBirth: string;
    class: string;
    religion: string;
    mobile: string;
    email: string;
    address: string;
    area: string;
    emergencyPhone: string;
    locationOfBirth: string;
    nationalityId: number;
    telephone: string;
    notes: string;
    photoPath: string;
    gender: string;
    streetName: string;
    state: boolean;

    //Father
    fatherName: string;
    fatherJob: string;
    fatherMobile: string;
    fatherAddress: string;

    //Mother
    motherName: string;
    motherMobile: string;
    motherEmail: string;
    motherSchool: string;
    motherDegree: string;
    motherGraduationYear: string;
    motherAddress: string;

    //Medical
    hasMedicalCheckUpRoutine: boolean;
    studVaccines;
    studChronicDisease: string;
    diseaseIsFamilyHistory: boolean;


    // schoolEmail: string;
    // mobile: string;
    // photoFileName: string;
    // privateNotes: string;
    // remarks: string;
    // creatorUserId: number;
    // creationDate: Date;
    // modifiedUserId: number;
    // lastDateModified: Date;
    // isDeleted: boolean;
    // integrationId: string;
    // fatherWorkTelephone: string;
    // motherWorkTelephone: string;
    // areaId?: number;
    // fatherMobile: string;
    // motherMobile: string;
    // officialRegistrationDate?: Date;
    // officialRegistrationNumber: number;
    // firstNameAr: string;
    // fatherNationalIdnumber: string;
    // hasResponsible?: boolean;
    // responsibleName: string;
    // studentResponsibleRelationId?: number;
    // responsibleTelephone: string;
    // responsibleAddress: string;
    // responsibleMobile: string;

}