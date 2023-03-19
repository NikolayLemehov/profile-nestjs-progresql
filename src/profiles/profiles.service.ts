import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Profile} from "./profiles.model";
import {CreateProfileDto} from "./dto/CreateProfileDto";

@Injectable()
export class ProfilesService {
  constructor(@InjectModel(Profile) private profileRepository: typeof Profile) {}

  async create(dto: CreateProfileDto) {
    return await this.profileRepository.create(dto)
  }
}
