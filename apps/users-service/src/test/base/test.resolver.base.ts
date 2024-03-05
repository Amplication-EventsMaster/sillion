/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Test } from "./Test";
import { TestCountArgs } from "./TestCountArgs";
import { TestFindManyArgs } from "./TestFindManyArgs";
import { TestFindUniqueArgs } from "./TestFindUniqueArgs";
import { CreateTestArgs } from "./CreateTestArgs";
import { UpdateTestArgs } from "./UpdateTestArgs";
import { DeleteTestArgs } from "./DeleteTestArgs";
import { Location } from "../../location/base/Location";
import { User } from "../../user/base/User";
import { TestService } from "../test.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Test)
export class TestResolverBase {
  constructor(
    protected readonly service: TestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "any",
  })
  async _testsMeta(
    @graphql.Args() args: TestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Test])
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "any",
  })
  async tests(@graphql.Args() args: TestFindManyArgs): Promise<Test[]> {
    return this.service.tests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Test, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "own",
  })
  async test(@graphql.Args() args: TestFindUniqueArgs): Promise<Test | null> {
    const result = await this.service.test(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Test)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "create",
    possession: "any",
  })
  async createTest(@graphql.Args() args: CreateTestArgs): Promise<Test> {
    return await this.service.createTest({
      ...args,
      data: {
        ...args.data,

        location: args.data.location
          ? {
              connect: args.data.location,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Test)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "update",
    possession: "any",
  })
  async updateTest(@graphql.Args() args: UpdateTestArgs): Promise<Test | null> {
    try {
      return await this.service.updateTest({
        ...args,
        data: {
          ...args.data,

          location: args.data.location
            ? {
                connect: args.data.location,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Test)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "delete",
    possession: "any",
  })
  async deleteTest(@graphql.Args() args: DeleteTestArgs): Promise<Test | null> {
    try {
      return await this.service.deleteTest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Location, {
    nullable: true,
    name: "location",
  })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async getLocation(@graphql.Parent() parent: Test): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Test): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
