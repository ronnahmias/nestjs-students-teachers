import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentTeacherController } from './student.constroller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports:[StudentModule],
    controllers: [TeacherController, StudentTeacherController],
    providers: [TeacherService],
})
export class TeacherModule {}
