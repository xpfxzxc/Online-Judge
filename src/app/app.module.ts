import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { MarkdownModule } from "ngx-markdown";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { ProblemsModule } from "./problems/problems.module";
import { SubmissionsModule } from "./submissions/submissions.module";
import { ContestsModule } from "./contests/contests.module";
import { RankingsModule } from "./rankings/rankings.module";
import { GraphQLModule } from "./graphql.module";
import { TagsModule } from './tags/tags.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    AuthModule,
    ProblemsModule,
    SubmissionsModule,
    ContestsModule,
    MarkdownModule.forRoot(),
    RankingsModule,
    GraphQLModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true
    }),
    TagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
