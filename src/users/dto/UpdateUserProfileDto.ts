export class UpdateUserProfileDto {
  readonly id: number;
  readonly username?: string;
  readonly email?: string;
  readonly role?: string;
  readonly firstName?: string;
  readonly secondName?: string;
  readonly state?: string;
}
