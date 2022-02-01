import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({message: 'this field do not be empty'})
  name: string;

  @IsEmail()
  @IsNotEmpty({message: 'this field do not be empty'})
  email:string;
}