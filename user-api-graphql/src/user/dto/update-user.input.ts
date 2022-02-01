import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({message: 'this field do not be empty'})
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({message: 'this field do not be empty'})
  @IsOptional()
  email?:string;
}