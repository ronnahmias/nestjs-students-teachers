import { Injectable } from '@nestjs/common';
import { v4 as uuid } from "uuid"
import { students } from 'src/db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentResponseDto[]{
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResponseDto{
        return this.students.find(student => {
            student.id === studentId;
        });
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto{
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: UpdateStudentDto, studentId: string): StudentResponseDto{
        let updateStudent: StudentResponseDto;

        const updatesStudentList = this.students.map(student =>{
            if(student.id === studentId){
                updateStudent = {
                    id:studentId,
                    ...payload
                }
                return updateStudent;
            }else{
                return student;
            }
        });
        this.students = updatesStudentList;
        return updateStudent;
    }

    getStudentsTeacherById(teacherId: string): FindStudentResponseDto[]{
        return this.students.filter(student => {
            return student.teacher === teacherId;
        });
    }

    updateStudentOfTeacher(teacherId: string, studentId: string): StudentResponseDto{
        let updateStudent: StudentResponseDto;

        const updatesStudentList = this.students.map(student =>{
            if(student.id === studentId){
                updateStudent = {
                    ...student,
                    teacher: teacherId
                }
                return updateStudent;
            }else{
                return student;
            }
        });
        this.students = updatesStudentList;
        return updateStudent;
    }
}
