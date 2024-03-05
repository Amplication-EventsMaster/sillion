/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Location, // @ts-ignore
  Test,
} from "@prisma/client";

export class LocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LocationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationCountArgs>
  ): Promise<number> {
    return this.prisma.location.count(args);
  }

  async locations<T extends Prisma.LocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>
  ): Promise<Location[]> {
    return this.prisma.location.findMany(args);
  }
  async location<T extends Prisma.LocationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationFindUniqueArgs>
  ): Promise<Location | null> {
    return this.prisma.location.findUnique(args);
  }
  async createLocation<T extends Prisma.LocationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationCreateArgs>
  ): Promise<Location> {
    return this.prisma.location.create<T>(args);
  }
  async updateLocation<T extends Prisma.LocationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>
  ): Promise<Location> {
    return this.prisma.location.update<T>(args);
  }
  async deleteLocation<T extends Prisma.LocationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>
  ): Promise<Location> {
    return this.prisma.location.delete(args);
  }

  async findTests(
    parentId: string,
    args: Prisma.TestFindManyArgs
  ): Promise<Test[]> {
    return this.prisma.location
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tests(args);
  }
}
