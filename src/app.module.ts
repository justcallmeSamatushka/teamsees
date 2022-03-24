import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DonationsModule } from './donations/donations.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { GraphQLISODateTime } from "@nestjs/graphql";
import { GraphQLDateTime } from 'graphql-iso-date';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      resolvers: { DateTime: GraphQLDateTime }
    }),
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
// import { DonationsModule } from './donations/donations.module';
// import { GraphQLDateTime } from 'graphql-iso-date';
//
// @Module({
//   imports: [
//     GraphQLModule.forRoot({
//       playground: false,
//       plugins: [ApolloServerPluginLandingPageLocalDefault()],
//       typePaths: ['./**/*.graphql'],
//       resolvers: { DateTime: GraphQLDateTime },
//       subscriptions: {
//         'graphql-ws': true,
//         'subscriptions-transport-ws': true,
//       },
//     }),
//     DonationsModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}