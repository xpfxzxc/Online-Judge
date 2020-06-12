import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  uuid: any,
  timestamptz: any,
  float8: any,
};



export type Code = {
   __typename?: 'code',
  content: Scalars['String'],
  id: Scalars['uuid'],
  lang: Scalars['String'],
};

export type Code_Aggregate = {
   __typename?: 'code_aggregate',
  aggregate?: Maybe<Code_Aggregate_Fields>,
  nodes: Array<Code>,
};

export type Code_Aggregate_Fields = {
   __typename?: 'code_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Code_Max_Fields>,
  min?: Maybe<Code_Min_Fields>,
};


export type Code_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Code_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Code_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Code_Max_Order_By>,
  min?: Maybe<Code_Min_Order_By>,
};

export type Code_Arr_Rel_Insert_Input = {
  data: Array<Code_Insert_Input>,
  on_conflict?: Maybe<Code_On_Conflict>,
};

export type Code_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Code_Bool_Exp>>>,
  _not?: Maybe<Code_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Code_Bool_Exp>>>,
  content?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  lang?: Maybe<String_Comparison_Exp>,
};

export enum Code_Constraint {
  CodePkey = 'code_pkey'
}

export type Code_Insert_Input = {
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  lang?: Maybe<Scalars['String']>,
};

export type Code_Max_Fields = {
   __typename?: 'code_max_fields',
  content?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

export type Code_Max_Order_By = {
  content?: Maybe<Order_By>,
  lang?: Maybe<Order_By>,
};

export type Code_Min_Fields = {
   __typename?: 'code_min_fields',
  content?: Maybe<Scalars['String']>,
  lang?: Maybe<Scalars['String']>,
};

export type Code_Min_Order_By = {
  content?: Maybe<Order_By>,
  lang?: Maybe<Order_By>,
};

export type Code_Mutation_Response = {
   __typename?: 'code_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Code>,
};

export type Code_Obj_Rel_Insert_Input = {
  data: Code_Insert_Input,
  on_conflict?: Maybe<Code_On_Conflict>,
};

export type Code_On_Conflict = {
  constraint: Code_Constraint,
  update_columns: Array<Code_Update_Column>,
  where?: Maybe<Code_Bool_Exp>,
};

export type Code_Order_By = {
  content?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  lang?: Maybe<Order_By>,
};

export enum Code_Select_Column {
  Content = 'content',
  Id = 'id',
  Lang = 'lang'
}

export type Code_Set_Input = {
  content?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  lang?: Maybe<Scalars['String']>,
};

export enum Code_Update_Column {
  Content = 'content',
  Id = 'id',
  Lang = 'lang'
}


export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>,
  _gt?: Maybe<Scalars['float8']>,
  _gte?: Maybe<Scalars['float8']>,
  _in?: Maybe<Array<Scalars['float8']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['float8']>,
  _lte?: Maybe<Scalars['float8']>,
  _neq?: Maybe<Scalars['float8']>,
  _nin?: Maybe<Array<Scalars['float8']>>,
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

export type Logged_User = {
   __typename?: 'logged_user',
  email: Scalars['String'],
  id: Scalars['Int'],
  name: Scalars['String'],
  role: Scalars['String'],
};

export type Login_Input = {
  name: Scalars['String'],
  password: Scalars['String'],
};

export type Login_Response = {
   __typename?: 'login_response',
  token: Scalars['String'],
  user: Logged_User,
};

export type Mutation = {
   __typename?: 'Mutation',
  delete_code?: Maybe<Code_Mutation_Response>,
  delete_problem?: Maybe<Problem_Mutation_Response>,
  delete_problem_tag?: Maybe<Problem_Tag_Mutation_Response>,
  delete_submission?: Maybe<Submission_Mutation_Response>,
  delete_tag?: Maybe<Tag_Mutation_Response>,
  delete_user?: Maybe<User_Mutation_Response>,
  insert_code?: Maybe<Code_Mutation_Response>,
  insert_problem?: Maybe<Problem_Mutation_Response>,
  insert_problem_tag?: Maybe<Problem_Tag_Mutation_Response>,
  insert_submission?: Maybe<Submission_Mutation_Response>,
  insert_tag?: Maybe<Tag_Mutation_Response>,
  insert_user?: Maybe<User_Mutation_Response>,
  login: Login_Response,
  sign_up: Scalars['Boolean'],
  submit_code: Submit_Code_Response,
  update_code?: Maybe<Code_Mutation_Response>,
  update_problem?: Maybe<Problem_Mutation_Response>,
  update_problem_tag?: Maybe<Problem_Tag_Mutation_Response>,
  update_submission?: Maybe<Submission_Mutation_Response>,
  update_tag?: Maybe<Tag_Mutation_Response>,
  update_user?: Maybe<User_Mutation_Response>,
  upload_test_set: Upload_Test_Set_Response,
};


export type MutationDelete_CodeArgs = {
  where: Code_Bool_Exp
};


export type MutationDelete_ProblemArgs = {
  where: Problem_Bool_Exp
};


export type MutationDelete_Problem_TagArgs = {
  where: Problem_Tag_Bool_Exp
};


export type MutationDelete_SubmissionArgs = {
  where: Submission_Bool_Exp
};


export type MutationDelete_TagArgs = {
  where: Tag_Bool_Exp
};


export type MutationDelete_UserArgs = {
  where: User_Bool_Exp
};


export type MutationInsert_CodeArgs = {
  objects: Array<Code_Insert_Input>,
  on_conflict?: Maybe<Code_On_Conflict>
};


export type MutationInsert_ProblemArgs = {
  objects: Array<Problem_Insert_Input>,
  on_conflict?: Maybe<Problem_On_Conflict>
};


export type MutationInsert_Problem_TagArgs = {
  objects: Array<Problem_Tag_Insert_Input>,
  on_conflict?: Maybe<Problem_Tag_On_Conflict>
};


export type MutationInsert_SubmissionArgs = {
  objects: Array<Submission_Insert_Input>,
  on_conflict?: Maybe<Submission_On_Conflict>
};


export type MutationInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>,
  on_conflict?: Maybe<Tag_On_Conflict>
};


export type MutationInsert_UserArgs = {
  objects: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>
};


export type MutationLoginArgs = {
  input: Login_Input
};


export type MutationSign_UpArgs = {
  input: Sign_Up_Input
};


export type MutationSubmit_CodeArgs = {
  input: Submit_Code_Input
};


export type MutationUpdate_CodeArgs = {
  _set?: Maybe<Code_Set_Input>,
  where: Code_Bool_Exp
};


export type MutationUpdate_ProblemArgs = {
  _inc?: Maybe<Problem_Inc_Input>,
  _set?: Maybe<Problem_Set_Input>,
  where: Problem_Bool_Exp
};


export type MutationUpdate_Problem_TagArgs = {
  _inc?: Maybe<Problem_Tag_Inc_Input>,
  _set?: Maybe<Problem_Tag_Set_Input>,
  where: Problem_Tag_Bool_Exp
};


export type MutationUpdate_SubmissionArgs = {
  _inc?: Maybe<Submission_Inc_Input>,
  _set?: Maybe<Submission_Set_Input>,
  where: Submission_Bool_Exp
};


export type MutationUpdate_TagArgs = {
  _inc?: Maybe<Tag_Inc_Input>,
  _set?: Maybe<Tag_Set_Input>,
  where: Tag_Bool_Exp
};


export type MutationUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>,
  _set?: Maybe<User_Set_Input>,
  where: User_Bool_Exp
};


export type MutationUpload_Test_SetArgs = {
  base64str: Scalars['String'],
  problem_id: Scalars['Int']
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Problem = {
   __typename?: 'problem',
  accepted_count: Scalars['Int'],
  author?: Maybe<User>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at: Scalars['timestamptz'],
  description: Scalars['String'],
  difficulty: Scalars['Int'],
  id: Scalars['Int'],
  input_format: Scalars['String'],
  memory_limit?: Maybe<Scalars['Int']>,
  negative_count: Scalars['Int'],
  note?: Maybe<Scalars['String']>,
  output_format: Scalars['String'],
  positive_count: Scalars['Int'],
  problem_tags: Array<Problem_Tag>,
  problem_tags_aggregate: Problem_Tag_Aggregate,
  samples?: Maybe<Scalars['String']>,
  status: Scalars['String'],
  submission_count: Scalars['Int'],
  submissions: Array<Submission>,
  submissions_aggregate: Submission_Aggregate,
  tags: Array<Problem_Tags_View>,
  tags_aggregate: Problem_Tags_View_Aggregate,
  time_limit?: Maybe<Scalars['Int']>,
  title: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};


export type ProblemProblem_TagsArgs = {
  distinct_on?: Maybe<Array<Problem_Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tag_Order_By>>,
  where?: Maybe<Problem_Tag_Bool_Exp>
};


export type ProblemProblem_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tag_Order_By>>,
  where?: Maybe<Problem_Tag_Bool_Exp>
};


export type ProblemSubmissionsArgs = {
  distinct_on?: Maybe<Array<Submission_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Submission_Order_By>>,
  where?: Maybe<Submission_Bool_Exp>
};


export type ProblemSubmissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Submission_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Submission_Order_By>>,
  where?: Maybe<Submission_Bool_Exp>
};


export type ProblemTagsArgs = {
  distinct_on?: Maybe<Array<Problem_Tags_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tags_View_Order_By>>,
  where?: Maybe<Problem_Tags_View_Bool_Exp>
};


export type ProblemTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Tags_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tags_View_Order_By>>,
  where?: Maybe<Problem_Tags_View_Bool_Exp>
};

export type Problem_Aggregate = {
   __typename?: 'problem_aggregate',
  aggregate?: Maybe<Problem_Aggregate_Fields>,
  nodes: Array<Problem>,
};

export type Problem_Aggregate_Fields = {
   __typename?: 'problem_aggregate_fields',
  avg?: Maybe<Problem_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Problem_Max_Fields>,
  min?: Maybe<Problem_Min_Fields>,
  stddev?: Maybe<Problem_Stddev_Fields>,
  stddev_pop?: Maybe<Problem_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Problem_Stddev_Samp_Fields>,
  sum?: Maybe<Problem_Sum_Fields>,
  var_pop?: Maybe<Problem_Var_Pop_Fields>,
  var_samp?: Maybe<Problem_Var_Samp_Fields>,
  variance?: Maybe<Problem_Variance_Fields>,
};


export type Problem_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Problem_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Problem_Aggregate_Order_By = {
  avg?: Maybe<Problem_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Problem_Max_Order_By>,
  min?: Maybe<Problem_Min_Order_By>,
  stddev?: Maybe<Problem_Stddev_Order_By>,
  stddev_pop?: Maybe<Problem_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Problem_Stddev_Samp_Order_By>,
  sum?: Maybe<Problem_Sum_Order_By>,
  var_pop?: Maybe<Problem_Var_Pop_Order_By>,
  var_samp?: Maybe<Problem_Var_Samp_Order_By>,
  variance?: Maybe<Problem_Variance_Order_By>,
};

export type Problem_Arr_Rel_Insert_Input = {
  data: Array<Problem_Insert_Input>,
  on_conflict?: Maybe<Problem_On_Conflict>,
};

export type Problem_Avg_Fields = {
   __typename?: 'problem_avg_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  memory_limit?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  time_limit?: Maybe<Scalars['Float']>,
};

export type Problem_Avg_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Problem_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Problem_Bool_Exp>>>,
  _not?: Maybe<Problem_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Problem_Bool_Exp>>>,
  accepted_count?: Maybe<Int_Comparison_Exp>,
  author?: Maybe<User_Bool_Exp>,
  author_id?: Maybe<Int_Comparison_Exp>,
  background?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  description?: Maybe<String_Comparison_Exp>,
  difficulty?: Maybe<Int_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  input_format?: Maybe<String_Comparison_Exp>,
  memory_limit?: Maybe<Int_Comparison_Exp>,
  negative_count?: Maybe<Int_Comparison_Exp>,
  note?: Maybe<String_Comparison_Exp>,
  output_format?: Maybe<String_Comparison_Exp>,
  positive_count?: Maybe<Int_Comparison_Exp>,
  problem_tags?: Maybe<Problem_Tag_Bool_Exp>,
  samples?: Maybe<String_Comparison_Exp>,
  status?: Maybe<String_Comparison_Exp>,
  submission_count?: Maybe<Int_Comparison_Exp>,
  submissions?: Maybe<Submission_Bool_Exp>,
  tags?: Maybe<Problem_Tags_View_Bool_Exp>,
  time_limit?: Maybe<Int_Comparison_Exp>,
  title?: Maybe<String_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

export enum Problem_Constraint {
  ProblemPkey = 'problem_pkey',
  ProblemTitleKey = 'problem_title_key'
}

export type Problem_Inc_Input = {
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  memory_limit?: Maybe<Scalars['Int']>,
  negative_count?: Maybe<Scalars['Int']>,
  positive_count?: Maybe<Scalars['Int']>,
  submission_count?: Maybe<Scalars['Int']>,
  time_limit?: Maybe<Scalars['Int']>,
};

export type Problem_Insert_Input = {
  accepted_count?: Maybe<Scalars['Int']>,
  author?: Maybe<User_Obj_Rel_Insert_Input>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  input_format?: Maybe<Scalars['String']>,
  memory_limit?: Maybe<Scalars['Int']>,
  negative_count?: Maybe<Scalars['Int']>,
  note?: Maybe<Scalars['String']>,
  output_format?: Maybe<Scalars['String']>,
  positive_count?: Maybe<Scalars['Int']>,
  problem_tags?: Maybe<Problem_Tag_Arr_Rel_Insert_Input>,
  samples?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  submission_count?: Maybe<Scalars['Int']>,
  submissions?: Maybe<Submission_Arr_Rel_Insert_Input>,
  time_limit?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Problem_Max_Fields = {
   __typename?: 'problem_max_fields',
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  input_format?: Maybe<Scalars['String']>,
  memory_limit?: Maybe<Scalars['Int']>,
  negative_count?: Maybe<Scalars['Int']>,
  note?: Maybe<Scalars['String']>,
  output_format?: Maybe<Scalars['String']>,
  positive_count?: Maybe<Scalars['Int']>,
  samples?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  submission_count?: Maybe<Scalars['Int']>,
  time_limit?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Problem_Max_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  background?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  input_format?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  note?: Maybe<Order_By>,
  output_format?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  samples?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Problem_Min_Fields = {
   __typename?: 'problem_min_fields',
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  input_format?: Maybe<Scalars['String']>,
  memory_limit?: Maybe<Scalars['Int']>,
  negative_count?: Maybe<Scalars['Int']>,
  note?: Maybe<Scalars['String']>,
  output_format?: Maybe<Scalars['String']>,
  positive_count?: Maybe<Scalars['Int']>,
  samples?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  submission_count?: Maybe<Scalars['Int']>,
  time_limit?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Problem_Min_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  background?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  input_format?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  note?: Maybe<Order_By>,
  output_format?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  samples?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Problem_Mutation_Response = {
   __typename?: 'problem_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Problem>,
};

export type Problem_Obj_Rel_Insert_Input = {
  data: Problem_Insert_Input,
  on_conflict?: Maybe<Problem_On_Conflict>,
};

export type Problem_On_Conflict = {
  constraint: Problem_Constraint,
  update_columns: Array<Problem_Update_Column>,
  where?: Maybe<Problem_Bool_Exp>,
};

export type Problem_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author?: Maybe<User_Order_By>,
  author_id?: Maybe<Order_By>,
  background?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  input_format?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  note?: Maybe<Order_By>,
  output_format?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  problem_tags_aggregate?: Maybe<Problem_Tag_Aggregate_Order_By>,
  samples?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  submissions_aggregate?: Maybe<Submission_Aggregate_Order_By>,
  tags_aggregate?: Maybe<Problem_Tags_View_Aggregate_Order_By>,
  time_limit?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export enum Problem_Select_Column {
  AcceptedCount = 'accepted_count',
  AuthorId = 'author_id',
  Background = 'background',
  CreatedAt = 'created_at',
  Description = 'description',
  Difficulty = 'difficulty',
  Id = 'id',
  InputFormat = 'input_format',
  MemoryLimit = 'memory_limit',
  NegativeCount = 'negative_count',
  Note = 'note',
  OutputFormat = 'output_format',
  PositiveCount = 'positive_count',
  Samples = 'samples',
  Status = 'status',
  SubmissionCount = 'submission_count',
  TimeLimit = 'time_limit',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type Problem_Set_Input = {
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  input_format?: Maybe<Scalars['String']>,
  memory_limit?: Maybe<Scalars['Int']>,
  negative_count?: Maybe<Scalars['Int']>,
  note?: Maybe<Scalars['String']>,
  output_format?: Maybe<Scalars['String']>,
  positive_count?: Maybe<Scalars['Int']>,
  samples?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  submission_count?: Maybe<Scalars['Int']>,
  time_limit?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Problem_Stddev_Fields = {
   __typename?: 'problem_stddev_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  memory_limit?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  time_limit?: Maybe<Scalars['Float']>,
};

export type Problem_Stddev_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Problem_Stddev_Pop_Fields = {
   __typename?: 'problem_stddev_pop_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  memory_limit?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  time_limit?: Maybe<Scalars['Float']>,
};

export type Problem_Stddev_Pop_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Problem_Stddev_Samp_Fields = {
   __typename?: 'problem_stddev_samp_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  memory_limit?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  time_limit?: Maybe<Scalars['Float']>,
};

export type Problem_Stddev_Samp_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Problem_Sum_Fields = {
   __typename?: 'problem_sum_fields',
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  memory_limit?: Maybe<Scalars['Int']>,
  negative_count?: Maybe<Scalars['Int']>,
  positive_count?: Maybe<Scalars['Int']>,
  submission_count?: Maybe<Scalars['Int']>,
  time_limit?: Maybe<Scalars['Int']>,
};

export type Problem_Sum_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Problem_Tag = {
   __typename?: 'problem_tag',
  problem_id: Scalars['Int'],
  tag: Tag,
  tag_id: Scalars['Int'],
};

export type Problem_Tag_Aggregate = {
   __typename?: 'problem_tag_aggregate',
  aggregate?: Maybe<Problem_Tag_Aggregate_Fields>,
  nodes: Array<Problem_Tag>,
};

export type Problem_Tag_Aggregate_Fields = {
   __typename?: 'problem_tag_aggregate_fields',
  avg?: Maybe<Problem_Tag_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Problem_Tag_Max_Fields>,
  min?: Maybe<Problem_Tag_Min_Fields>,
  stddev?: Maybe<Problem_Tag_Stddev_Fields>,
  stddev_pop?: Maybe<Problem_Tag_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Problem_Tag_Stddev_Samp_Fields>,
  sum?: Maybe<Problem_Tag_Sum_Fields>,
  var_pop?: Maybe<Problem_Tag_Var_Pop_Fields>,
  var_samp?: Maybe<Problem_Tag_Var_Samp_Fields>,
  variance?: Maybe<Problem_Tag_Variance_Fields>,
};


export type Problem_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Problem_Tag_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Problem_Tag_Aggregate_Order_By = {
  avg?: Maybe<Problem_Tag_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Problem_Tag_Max_Order_By>,
  min?: Maybe<Problem_Tag_Min_Order_By>,
  stddev?: Maybe<Problem_Tag_Stddev_Order_By>,
  stddev_pop?: Maybe<Problem_Tag_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Problem_Tag_Stddev_Samp_Order_By>,
  sum?: Maybe<Problem_Tag_Sum_Order_By>,
  var_pop?: Maybe<Problem_Tag_Var_Pop_Order_By>,
  var_samp?: Maybe<Problem_Tag_Var_Samp_Order_By>,
  variance?: Maybe<Problem_Tag_Variance_Order_By>,
};

export type Problem_Tag_Arr_Rel_Insert_Input = {
  data: Array<Problem_Tag_Insert_Input>,
  on_conflict?: Maybe<Problem_Tag_On_Conflict>,
};

export type Problem_Tag_Avg_Fields = {
   __typename?: 'problem_tag_avg_fields',
  problem_id?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tag_Avg_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Problem_Tag_Bool_Exp>>>,
  _not?: Maybe<Problem_Tag_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Problem_Tag_Bool_Exp>>>,
  problem_id?: Maybe<Int_Comparison_Exp>,
  tag?: Maybe<Tag_Bool_Exp>,
  tag_id?: Maybe<Int_Comparison_Exp>,
};

export enum Problem_Tag_Constraint {
  ProblemTagPkey = 'problem_tag_pkey'
}

export type Problem_Tag_Inc_Input = {
  problem_id?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tag_Insert_Input = {
  problem_id?: Maybe<Scalars['Int']>,
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>,
  tag_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tag_Max_Fields = {
   __typename?: 'problem_tag_max_fields',
  problem_id?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tag_Max_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Min_Fields = {
   __typename?: 'problem_tag_min_fields',
  problem_id?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tag_Min_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Mutation_Response = {
   __typename?: 'problem_tag_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Problem_Tag>,
};

export type Problem_Tag_Obj_Rel_Insert_Input = {
  data: Problem_Tag_Insert_Input,
  on_conflict?: Maybe<Problem_Tag_On_Conflict>,
};

export type Problem_Tag_On_Conflict = {
  constraint: Problem_Tag_Constraint,
  update_columns: Array<Problem_Tag_Update_Column>,
  where?: Maybe<Problem_Tag_Bool_Exp>,
};

export type Problem_Tag_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag?: Maybe<Tag_Order_By>,
  tag_id?: Maybe<Order_By>,
};

export enum Problem_Tag_Select_Column {
  ProblemId = 'problem_id',
  TagId = 'tag_id'
}

export type Problem_Tag_Set_Input = {
  problem_id?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tag_Stddev_Fields = {
   __typename?: 'problem_tag_stddev_fields',
  problem_id?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tag_Stddev_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Stddev_Pop_Fields = {
   __typename?: 'problem_tag_stddev_pop_fields',
  problem_id?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tag_Stddev_Pop_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Stddev_Samp_Fields = {
   __typename?: 'problem_tag_stddev_samp_fields',
  problem_id?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tag_Stddev_Samp_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Sum_Fields = {
   __typename?: 'problem_tag_sum_fields',
  problem_id?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tag_Sum_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export enum Problem_Tag_Update_Column {
  ProblemId = 'problem_id',
  TagId = 'tag_id'
}

export type Problem_Tag_Var_Pop_Fields = {
   __typename?: 'problem_tag_var_pop_fields',
  problem_id?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tag_Var_Pop_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Var_Samp_Fields = {
   __typename?: 'problem_tag_var_samp_fields',
  problem_id?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tag_Var_Samp_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tag_Variance_Fields = {
   __typename?: 'problem_tag_variance_fields',
  problem_id?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tag_Variance_Order_By = {
  problem_id?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Problem_Tags_View = {
   __typename?: 'problem_tags_view',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  problem_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tags_View_Aggregate = {
   __typename?: 'problem_tags_view_aggregate',
  aggregate?: Maybe<Problem_Tags_View_Aggregate_Fields>,
  nodes: Array<Problem_Tags_View>,
};

export type Problem_Tags_View_Aggregate_Fields = {
   __typename?: 'problem_tags_view_aggregate_fields',
  avg?: Maybe<Problem_Tags_View_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Problem_Tags_View_Max_Fields>,
  min?: Maybe<Problem_Tags_View_Min_Fields>,
  stddev?: Maybe<Problem_Tags_View_Stddev_Fields>,
  stddev_pop?: Maybe<Problem_Tags_View_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Problem_Tags_View_Stddev_Samp_Fields>,
  sum?: Maybe<Problem_Tags_View_Sum_Fields>,
  var_pop?: Maybe<Problem_Tags_View_Var_Pop_Fields>,
  var_samp?: Maybe<Problem_Tags_View_Var_Samp_Fields>,
  variance?: Maybe<Problem_Tags_View_Variance_Fields>,
};


export type Problem_Tags_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Problem_Tags_View_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Problem_Tags_View_Aggregate_Order_By = {
  avg?: Maybe<Problem_Tags_View_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Problem_Tags_View_Max_Order_By>,
  min?: Maybe<Problem_Tags_View_Min_Order_By>,
  stddev?: Maybe<Problem_Tags_View_Stddev_Order_By>,
  stddev_pop?: Maybe<Problem_Tags_View_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Problem_Tags_View_Stddev_Samp_Order_By>,
  sum?: Maybe<Problem_Tags_View_Sum_Order_By>,
  var_pop?: Maybe<Problem_Tags_View_Var_Pop_Order_By>,
  var_samp?: Maybe<Problem_Tags_View_Var_Samp_Order_By>,
  variance?: Maybe<Problem_Tags_View_Variance_Order_By>,
};

export type Problem_Tags_View_Avg_Fields = {
   __typename?: 'problem_tags_view_avg_fields',
  id?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tags_View_Avg_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Problem_Tags_View_Bool_Exp>>>,
  _not?: Maybe<Problem_Tags_View_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Problem_Tags_View_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  problem_id?: Maybe<Int_Comparison_Exp>,
};

export type Problem_Tags_View_Max_Fields = {
   __typename?: 'problem_tags_view_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  problem_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tags_View_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Min_Fields = {
   __typename?: 'problem_tags_view_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  problem_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tags_View_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export enum Problem_Tags_View_Select_Column {
  Id = 'id',
  Name = 'name',
  ProblemId = 'problem_id'
}

export type Problem_Tags_View_Stddev_Fields = {
   __typename?: 'problem_tags_view_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tags_View_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Stddev_Pop_Fields = {
   __typename?: 'problem_tags_view_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tags_View_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Stddev_Samp_Fields = {
   __typename?: 'problem_tags_view_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tags_View_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Sum_Fields = {
   __typename?: 'problem_tags_view_sum_fields',
  id?: Maybe<Scalars['Int']>,
  problem_id?: Maybe<Scalars['Int']>,
};

export type Problem_Tags_View_Sum_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Var_Pop_Fields = {
   __typename?: 'problem_tags_view_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tags_View_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Var_Samp_Fields = {
   __typename?: 'problem_tags_view_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tags_View_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export type Problem_Tags_View_Variance_Fields = {
   __typename?: 'problem_tags_view_variance_fields',
  id?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
};

export type Problem_Tags_View_Variance_Order_By = {
  id?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
};

export enum Problem_Update_Column {
  AcceptedCount = 'accepted_count',
  AuthorId = 'author_id',
  Background = 'background',
  CreatedAt = 'created_at',
  Description = 'description',
  Difficulty = 'difficulty',
  Id = 'id',
  InputFormat = 'input_format',
  MemoryLimit = 'memory_limit',
  NegativeCount = 'negative_count',
  Note = 'note',
  OutputFormat = 'output_format',
  PositiveCount = 'positive_count',
  Samples = 'samples',
  Status = 'status',
  SubmissionCount = 'submission_count',
  TimeLimit = 'time_limit',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type Problem_Var_Pop_Fields = {
   __typename?: 'problem_var_pop_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  memory_limit?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  time_limit?: Maybe<Scalars['Float']>,
};

export type Problem_Var_Pop_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Problem_Var_Samp_Fields = {
   __typename?: 'problem_var_samp_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  memory_limit?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  time_limit?: Maybe<Scalars['Float']>,
};

export type Problem_Var_Samp_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Problem_Variance_Fields = {
   __typename?: 'problem_variance_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  memory_limit?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  time_limit?: Maybe<Scalars['Float']>,
};

export type Problem_Variance_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_limit?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  time_limit?: Maybe<Order_By>,
};

export type Query = {
   __typename?: 'Query',
  code: Array<Code>,
  code_aggregate: Code_Aggregate,
  code_by_pk?: Maybe<Code>,
  hello: Scalars['String'],
  problem: Array<Problem>,
  problem_aggregate: Problem_Aggregate,
  problem_by_pk?: Maybe<Problem>,
  problem_tag: Array<Problem_Tag>,
  problem_tag_aggregate: Problem_Tag_Aggregate,
  problem_tag_by_pk?: Maybe<Problem_Tag>,
  problem_tags_view: Array<Problem_Tags_View>,
  problem_tags_view_aggregate: Problem_Tags_View_Aggregate,
  submission: Array<Submission>,
  submission_aggregate: Submission_Aggregate,
  submission_by_pk?: Maybe<Submission>,
  tag: Array<Tag>,
  tag_aggregate: Tag_Aggregate,
  tag_by_pk?: Maybe<Tag>,
  tag_problems_view: Array<Tag_Problems_View>,
  tag_problems_view_aggregate: Tag_Problems_View_Aggregate,
  user: Array<User>,
  user_aggregate: User_Aggregate,
  user_by_pk?: Maybe<User>,
};


export type QueryCodeArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Code_Order_By>>,
  where?: Maybe<Code_Bool_Exp>
};


export type QueryCode_AggregateArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Code_Order_By>>,
  where?: Maybe<Code_Bool_Exp>
};


export type QueryCode_By_PkArgs = {
  id: Scalars['uuid']
};


export type QueryProblemArgs = {
  distinct_on?: Maybe<Array<Problem_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Order_By>>,
  where?: Maybe<Problem_Bool_Exp>
};


export type QueryProblem_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Order_By>>,
  where?: Maybe<Problem_Bool_Exp>
};


export type QueryProblem_By_PkArgs = {
  id: Scalars['Int']
};


export type QueryProblem_TagArgs = {
  distinct_on?: Maybe<Array<Problem_Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tag_Order_By>>,
  where?: Maybe<Problem_Tag_Bool_Exp>
};


export type QueryProblem_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tag_Order_By>>,
  where?: Maybe<Problem_Tag_Bool_Exp>
};


export type QueryProblem_Tag_By_PkArgs = {
  problem_id: Scalars['Int'],
  tag_id: Scalars['Int']
};


export type QueryProblem_Tags_ViewArgs = {
  distinct_on?: Maybe<Array<Problem_Tags_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tags_View_Order_By>>,
  where?: Maybe<Problem_Tags_View_Bool_Exp>
};


export type QueryProblem_Tags_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Tags_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tags_View_Order_By>>,
  where?: Maybe<Problem_Tags_View_Bool_Exp>
};


export type QuerySubmissionArgs = {
  distinct_on?: Maybe<Array<Submission_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Submission_Order_By>>,
  where?: Maybe<Submission_Bool_Exp>
};


export type QuerySubmission_AggregateArgs = {
  distinct_on?: Maybe<Array<Submission_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Submission_Order_By>>,
  where?: Maybe<Submission_Bool_Exp>
};


export type QuerySubmission_By_PkArgs = {
  id: Scalars['uuid']
};


export type QueryTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


export type QueryTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


export type QueryTag_By_PkArgs = {
  id: Scalars['Int']
};


export type QueryTag_Problems_ViewArgs = {
  distinct_on?: Maybe<Array<Tag_Problems_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Problems_View_Order_By>>,
  where?: Maybe<Tag_Problems_View_Bool_Exp>
};


export type QueryTag_Problems_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Problems_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Problems_View_Order_By>>,
  where?: Maybe<Tag_Problems_View_Bool_Exp>
};


export type QueryUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type QueryUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type QueryUser_By_PkArgs = {
  id: Scalars['Int']
};

export type Sign_Up_Input = {
  email: Scalars['String'],
  name: Scalars['String'],
  password: Scalars['String'],
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type Submission = {
   __typename?: 'submission',
  code: Code,
  code_id: Scalars['uuid'],
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  memory_usage?: Maybe<Scalars['Int']>,
  problem: Problem,
  problem_id: Scalars['Int'],
  score?: Maybe<Scalars['float8']>,
  status: Scalars['String'],
  test_points?: Maybe<Scalars['String']>,
  time_usage?: Maybe<Scalars['Int']>,
  user: User,
  user_id: Scalars['Int'],
};

export type Submission_Aggregate = {
   __typename?: 'submission_aggregate',
  aggregate?: Maybe<Submission_Aggregate_Fields>,
  nodes: Array<Submission>,
};

export type Submission_Aggregate_Fields = {
   __typename?: 'submission_aggregate_fields',
  avg?: Maybe<Submission_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Submission_Max_Fields>,
  min?: Maybe<Submission_Min_Fields>,
  stddev?: Maybe<Submission_Stddev_Fields>,
  stddev_pop?: Maybe<Submission_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Submission_Stddev_Samp_Fields>,
  sum?: Maybe<Submission_Sum_Fields>,
  var_pop?: Maybe<Submission_Var_Pop_Fields>,
  var_samp?: Maybe<Submission_Var_Samp_Fields>,
  variance?: Maybe<Submission_Variance_Fields>,
};


export type Submission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Submission_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Submission_Aggregate_Order_By = {
  avg?: Maybe<Submission_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Submission_Max_Order_By>,
  min?: Maybe<Submission_Min_Order_By>,
  stddev?: Maybe<Submission_Stddev_Order_By>,
  stddev_pop?: Maybe<Submission_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Submission_Stddev_Samp_Order_By>,
  sum?: Maybe<Submission_Sum_Order_By>,
  var_pop?: Maybe<Submission_Var_Pop_Order_By>,
  var_samp?: Maybe<Submission_Var_Samp_Order_By>,
  variance?: Maybe<Submission_Variance_Order_By>,
};

export type Submission_Arr_Rel_Insert_Input = {
  data: Array<Submission_Insert_Input>,
  on_conflict?: Maybe<Submission_On_Conflict>,
};

export type Submission_Avg_Fields = {
   __typename?: 'submission_avg_fields',
  memory_usage?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
  score?: Maybe<Scalars['Float']>,
  time_usage?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Submission_Avg_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Submission_Bool_Exp>>>,
  _not?: Maybe<Submission_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Submission_Bool_Exp>>>,
  code?: Maybe<Code_Bool_Exp>,
  code_id?: Maybe<Uuid_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  memory_usage?: Maybe<Int_Comparison_Exp>,
  problem?: Maybe<Problem_Bool_Exp>,
  problem_id?: Maybe<Int_Comparison_Exp>,
  score?: Maybe<Float8_Comparison_Exp>,
  status?: Maybe<String_Comparison_Exp>,
  test_points?: Maybe<String_Comparison_Exp>,
  time_usage?: Maybe<Int_Comparison_Exp>,
  user?: Maybe<User_Bool_Exp>,
  user_id?: Maybe<Int_Comparison_Exp>,
};

export enum Submission_Constraint {
  SubmissionPkey = 'submission_pkey'
}

export type Submission_Inc_Input = {
  memory_usage?: Maybe<Scalars['Int']>,
  problem_id?: Maybe<Scalars['Int']>,
  time_usage?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Submission_Insert_Input = {
  code?: Maybe<Code_Obj_Rel_Insert_Input>,
  code_id?: Maybe<Scalars['uuid']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  memory_usage?: Maybe<Scalars['Int']>,
  problem?: Maybe<Problem_Obj_Rel_Insert_Input>,
  problem_id?: Maybe<Scalars['Int']>,
  score?: Maybe<Scalars['float8']>,
  status?: Maybe<Scalars['String']>,
  test_points?: Maybe<Scalars['String']>,
  time_usage?: Maybe<Scalars['Int']>,
  user?: Maybe<User_Obj_Rel_Insert_Input>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Submission_Max_Fields = {
   __typename?: 'submission_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  memory_usage?: Maybe<Scalars['Int']>,
  problem_id?: Maybe<Scalars['Int']>,
  score?: Maybe<Scalars['float8']>,
  status?: Maybe<Scalars['String']>,
  test_points?: Maybe<Scalars['String']>,
  time_usage?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Submission_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  test_points?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Min_Fields = {
   __typename?: 'submission_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  memory_usage?: Maybe<Scalars['Int']>,
  problem_id?: Maybe<Scalars['Int']>,
  score?: Maybe<Scalars['float8']>,
  status?: Maybe<Scalars['String']>,
  test_points?: Maybe<Scalars['String']>,
  time_usage?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Submission_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  test_points?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Mutation_Response = {
   __typename?: 'submission_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Submission>,
};

export type Submission_Obj_Rel_Insert_Input = {
  data: Submission_Insert_Input,
  on_conflict?: Maybe<Submission_On_Conflict>,
};

export type Submission_On_Conflict = {
  constraint: Submission_Constraint,
  update_columns: Array<Submission_Update_Column>,
  where?: Maybe<Submission_Bool_Exp>,
};

export type Submission_Order_By = {
  code?: Maybe<Code_Order_By>,
  code_id?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  memory_usage?: Maybe<Order_By>,
  problem?: Maybe<Problem_Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  test_points?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user?: Maybe<User_Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Submission_Select_Column {
  CodeId = 'code_id',
  CreatedAt = 'created_at',
  Id = 'id',
  MemoryUsage = 'memory_usage',
  ProblemId = 'problem_id',
  Score = 'score',
  Status = 'status',
  TestPoints = 'test_points',
  TimeUsage = 'time_usage',
  UserId = 'user_id'
}

export type Submission_Set_Input = {
  code_id?: Maybe<Scalars['uuid']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  memory_usage?: Maybe<Scalars['Int']>,
  problem_id?: Maybe<Scalars['Int']>,
  score?: Maybe<Scalars['float8']>,
  status?: Maybe<Scalars['String']>,
  test_points?: Maybe<Scalars['String']>,
  time_usage?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Submission_Stddev_Fields = {
   __typename?: 'submission_stddev_fields',
  memory_usage?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
  score?: Maybe<Scalars['Float']>,
  time_usage?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Submission_Stddev_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Stddev_Pop_Fields = {
   __typename?: 'submission_stddev_pop_fields',
  memory_usage?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
  score?: Maybe<Scalars['Float']>,
  time_usage?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Submission_Stddev_Pop_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Stddev_Samp_Fields = {
   __typename?: 'submission_stddev_samp_fields',
  memory_usage?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
  score?: Maybe<Scalars['Float']>,
  time_usage?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Submission_Stddev_Samp_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Sum_Fields = {
   __typename?: 'submission_sum_fields',
  memory_usage?: Maybe<Scalars['Int']>,
  problem_id?: Maybe<Scalars['Int']>,
  score?: Maybe<Scalars['float8']>,
  time_usage?: Maybe<Scalars['Int']>,
  user_id?: Maybe<Scalars['Int']>,
};

export type Submission_Sum_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export enum Submission_Update_Column {
  CodeId = 'code_id',
  CreatedAt = 'created_at',
  Id = 'id',
  MemoryUsage = 'memory_usage',
  ProblemId = 'problem_id',
  Score = 'score',
  Status = 'status',
  TestPoints = 'test_points',
  TimeUsage = 'time_usage',
  UserId = 'user_id'
}

export type Submission_Var_Pop_Fields = {
   __typename?: 'submission_var_pop_fields',
  memory_usage?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
  score?: Maybe<Scalars['Float']>,
  time_usage?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Submission_Var_Pop_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Var_Samp_Fields = {
   __typename?: 'submission_var_samp_fields',
  memory_usage?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
  score?: Maybe<Scalars['Float']>,
  time_usage?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Submission_Var_Samp_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submission_Variance_Fields = {
   __typename?: 'submission_variance_fields',
  memory_usage?: Maybe<Scalars['Float']>,
  problem_id?: Maybe<Scalars['Float']>,
  score?: Maybe<Scalars['Float']>,
  time_usage?: Maybe<Scalars['Float']>,
  user_id?: Maybe<Scalars['Float']>,
};

export type Submission_Variance_Order_By = {
  memory_usage?: Maybe<Order_By>,
  problem_id?: Maybe<Order_By>,
  score?: Maybe<Order_By>,
  time_usage?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

export type Submit_Code_Input = {
  content: Scalars['String'],
  lang: Scalars['String'],
  problem_id: Scalars['ID'],
};

export type Submit_Code_Response = {
   __typename?: 'submit_code_response',
  submission_id: Scalars['ID'],
};

export type Subscription = {
   __typename?: 'Subscription',
  code: Array<Code>,
  code_aggregate: Code_Aggregate,
  code_by_pk?: Maybe<Code>,
  problem: Array<Problem>,
  problem_aggregate: Problem_Aggregate,
  problem_by_pk?: Maybe<Problem>,
  problem_tag: Array<Problem_Tag>,
  problem_tag_aggregate: Problem_Tag_Aggregate,
  problem_tag_by_pk?: Maybe<Problem_Tag>,
  problem_tags_view: Array<Problem_Tags_View>,
  problem_tags_view_aggregate: Problem_Tags_View_Aggregate,
  submission: Array<Submission>,
  submission_aggregate: Submission_Aggregate,
  submission_by_pk?: Maybe<Submission>,
  tag: Array<Tag>,
  tag_aggregate: Tag_Aggregate,
  tag_by_pk?: Maybe<Tag>,
  tag_problems_view: Array<Tag_Problems_View>,
  tag_problems_view_aggregate: Tag_Problems_View_Aggregate,
  user: Array<User>,
  user_aggregate: User_Aggregate,
  user_by_pk?: Maybe<User>,
};


export type SubscriptionCodeArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Code_Order_By>>,
  where?: Maybe<Code_Bool_Exp>
};


export type SubscriptionCode_AggregateArgs = {
  distinct_on?: Maybe<Array<Code_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Code_Order_By>>,
  where?: Maybe<Code_Bool_Exp>
};


export type SubscriptionCode_By_PkArgs = {
  id: Scalars['uuid']
};


export type SubscriptionProblemArgs = {
  distinct_on?: Maybe<Array<Problem_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Order_By>>,
  where?: Maybe<Problem_Bool_Exp>
};


export type SubscriptionProblem_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Order_By>>,
  where?: Maybe<Problem_Bool_Exp>
};


export type SubscriptionProblem_By_PkArgs = {
  id: Scalars['Int']
};


export type SubscriptionProblem_TagArgs = {
  distinct_on?: Maybe<Array<Problem_Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tag_Order_By>>,
  where?: Maybe<Problem_Tag_Bool_Exp>
};


export type SubscriptionProblem_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tag_Order_By>>,
  where?: Maybe<Problem_Tag_Bool_Exp>
};


export type SubscriptionProblem_Tag_By_PkArgs = {
  problem_id: Scalars['Int'],
  tag_id: Scalars['Int']
};


export type SubscriptionProblem_Tags_ViewArgs = {
  distinct_on?: Maybe<Array<Problem_Tags_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tags_View_Order_By>>,
  where?: Maybe<Problem_Tags_View_Bool_Exp>
};


export type SubscriptionProblem_Tags_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Tags_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Tags_View_Order_By>>,
  where?: Maybe<Problem_Tags_View_Bool_Exp>
};


export type SubscriptionSubmissionArgs = {
  distinct_on?: Maybe<Array<Submission_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Submission_Order_By>>,
  where?: Maybe<Submission_Bool_Exp>
};


export type SubscriptionSubmission_AggregateArgs = {
  distinct_on?: Maybe<Array<Submission_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Submission_Order_By>>,
  where?: Maybe<Submission_Bool_Exp>
};


export type SubscriptionSubmission_By_PkArgs = {
  id: Scalars['uuid']
};


export type SubscriptionTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


export type SubscriptionTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


export type SubscriptionTag_By_PkArgs = {
  id: Scalars['Int']
};


export type SubscriptionTag_Problems_ViewArgs = {
  distinct_on?: Maybe<Array<Tag_Problems_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Problems_View_Order_By>>,
  where?: Maybe<Tag_Problems_View_Bool_Exp>
};


export type SubscriptionTag_Problems_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Problems_View_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Problems_View_Order_By>>,
  where?: Maybe<Tag_Problems_View_Bool_Exp>
};


export type SubscriptionUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type SubscriptionUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type SubscriptionUser_By_PkArgs = {
  id: Scalars['Int']
};

export type Tag = {
   __typename?: 'tag',
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type Tag_Aggregate = {
   __typename?: 'tag_aggregate',
  aggregate?: Maybe<Tag_Aggregate_Fields>,
  nodes: Array<Tag>,
};

export type Tag_Aggregate_Fields = {
   __typename?: 'tag_aggregate_fields',
  avg?: Maybe<Tag_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Tag_Max_Fields>,
  min?: Maybe<Tag_Min_Fields>,
  stddev?: Maybe<Tag_Stddev_Fields>,
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>,
  sum?: Maybe<Tag_Sum_Fields>,
  var_pop?: Maybe<Tag_Var_Pop_Fields>,
  var_samp?: Maybe<Tag_Var_Samp_Fields>,
  variance?: Maybe<Tag_Variance_Fields>,
};


export type Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Tag_Aggregate_Order_By = {
  avg?: Maybe<Tag_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Tag_Max_Order_By>,
  min?: Maybe<Tag_Min_Order_By>,
  stddev?: Maybe<Tag_Stddev_Order_By>,
  stddev_pop?: Maybe<Tag_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Tag_Stddev_Samp_Order_By>,
  sum?: Maybe<Tag_Sum_Order_By>,
  var_pop?: Maybe<Tag_Var_Pop_Order_By>,
  var_samp?: Maybe<Tag_Var_Samp_Order_By>,
  variance?: Maybe<Tag_Variance_Order_By>,
};

export type Tag_Arr_Rel_Insert_Input = {
  data: Array<Tag_Insert_Input>,
  on_conflict?: Maybe<Tag_On_Conflict>,
};

export type Tag_Avg_Fields = {
   __typename?: 'tag_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Tag_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Bool_Exp>>>,
  _not?: Maybe<Tag_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Tag_Bool_Exp>>>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
};

export enum Tag_Constraint {
  TagNameKey = 'tag_name_key',
  TagPkey = 'tag_pkey'
}

export type Tag_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

export type Tag_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Tag_Max_Fields = {
   __typename?: 'tag_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Tag_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Tag_Min_Fields = {
   __typename?: 'tag_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Tag_Min_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Tag_Mutation_Response = {
   __typename?: 'tag_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Tag>,
};

export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input,
  on_conflict?: Maybe<Tag_On_Conflict>,
};

export type Tag_On_Conflict = {
  constraint: Tag_Constraint,
  update_columns: Array<Tag_Update_Column>,
  where?: Maybe<Tag_Bool_Exp>,
};

export type Tag_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

export type Tag_Problems_View = {
   __typename?: 'tag_problems_view',
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  input_format?: Maybe<Scalars['String']>,
  negative_count?: Maybe<Scalars['Int']>,
  note?: Maybe<Scalars['String']>,
  output_format?: Maybe<Scalars['String']>,
  positive_count?: Maybe<Scalars['Int']>,
  sample?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  submission_count?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Tag_Problems_View_Aggregate = {
   __typename?: 'tag_problems_view_aggregate',
  aggregate?: Maybe<Tag_Problems_View_Aggregate_Fields>,
  nodes: Array<Tag_Problems_View>,
};

export type Tag_Problems_View_Aggregate_Fields = {
   __typename?: 'tag_problems_view_aggregate_fields',
  avg?: Maybe<Tag_Problems_View_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Tag_Problems_View_Max_Fields>,
  min?: Maybe<Tag_Problems_View_Min_Fields>,
  stddev?: Maybe<Tag_Problems_View_Stddev_Fields>,
  stddev_pop?: Maybe<Tag_Problems_View_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Tag_Problems_View_Stddev_Samp_Fields>,
  sum?: Maybe<Tag_Problems_View_Sum_Fields>,
  var_pop?: Maybe<Tag_Problems_View_Var_Pop_Fields>,
  var_samp?: Maybe<Tag_Problems_View_Var_Samp_Fields>,
  variance?: Maybe<Tag_Problems_View_Variance_Fields>,
};


export type Tag_Problems_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Problems_View_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Tag_Problems_View_Aggregate_Order_By = {
  avg?: Maybe<Tag_Problems_View_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Tag_Problems_View_Max_Order_By>,
  min?: Maybe<Tag_Problems_View_Min_Order_By>,
  stddev?: Maybe<Tag_Problems_View_Stddev_Order_By>,
  stddev_pop?: Maybe<Tag_Problems_View_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Tag_Problems_View_Stddev_Samp_Order_By>,
  sum?: Maybe<Tag_Problems_View_Sum_Order_By>,
  var_pop?: Maybe<Tag_Problems_View_Var_Pop_Order_By>,
  var_samp?: Maybe<Tag_Problems_View_Var_Samp_Order_By>,
  variance?: Maybe<Tag_Problems_View_Variance_Order_By>,
};

export type Tag_Problems_View_Avg_Fields = {
   __typename?: 'tag_problems_view_avg_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Tag_Problems_View_Avg_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Tag_Problems_View_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Problems_View_Bool_Exp>>>,
  _not?: Maybe<Tag_Problems_View_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Tag_Problems_View_Bool_Exp>>>,
  accepted_count?: Maybe<Int_Comparison_Exp>,
  author_id?: Maybe<Int_Comparison_Exp>,
  background?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  description?: Maybe<String_Comparison_Exp>,
  difficulty?: Maybe<Int_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  input_format?: Maybe<String_Comparison_Exp>,
  negative_count?: Maybe<Int_Comparison_Exp>,
  note?: Maybe<String_Comparison_Exp>,
  output_format?: Maybe<String_Comparison_Exp>,
  positive_count?: Maybe<Int_Comparison_Exp>,
  sample?: Maybe<String_Comparison_Exp>,
  status?: Maybe<String_Comparison_Exp>,
  submission_count?: Maybe<Int_Comparison_Exp>,
  tag_id?: Maybe<Int_Comparison_Exp>,
  title?: Maybe<String_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

export type Tag_Problems_View_Max_Fields = {
   __typename?: 'tag_problems_view_max_fields',
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  input_format?: Maybe<Scalars['String']>,
  negative_count?: Maybe<Scalars['Int']>,
  note?: Maybe<Scalars['String']>,
  output_format?: Maybe<Scalars['String']>,
  positive_count?: Maybe<Scalars['Int']>,
  sample?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  submission_count?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Tag_Problems_View_Max_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  background?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  input_format?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  note?: Maybe<Order_By>,
  output_format?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  sample?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Tag_Problems_View_Min_Fields = {
   __typename?: 'tag_problems_view_min_fields',
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  background?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  input_format?: Maybe<Scalars['String']>,
  negative_count?: Maybe<Scalars['Int']>,
  note?: Maybe<Scalars['String']>,
  output_format?: Maybe<Scalars['String']>,
  positive_count?: Maybe<Scalars['Int']>,
  sample?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  submission_count?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

export type Tag_Problems_View_Min_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  background?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  input_format?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  note?: Maybe<Order_By>,
  output_format?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  sample?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export type Tag_Problems_View_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  background?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  input_format?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  note?: Maybe<Order_By>,
  output_format?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  sample?: Maybe<Order_By>,
  status?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

export enum Tag_Problems_View_Select_Column {
  AcceptedCount = 'accepted_count',
  AuthorId = 'author_id',
  Background = 'background',
  CreatedAt = 'created_at',
  Description = 'description',
  Difficulty = 'difficulty',
  Id = 'id',
  InputFormat = 'input_format',
  NegativeCount = 'negative_count',
  Note = 'note',
  OutputFormat = 'output_format',
  PositiveCount = 'positive_count',
  Sample = 'sample',
  Status = 'status',
  SubmissionCount = 'submission_count',
  TagId = 'tag_id',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type Tag_Problems_View_Stddev_Fields = {
   __typename?: 'tag_problems_view_stddev_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Tag_Problems_View_Stddev_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Tag_Problems_View_Stddev_Pop_Fields = {
   __typename?: 'tag_problems_view_stddev_pop_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Tag_Problems_View_Stddev_Pop_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Tag_Problems_View_Stddev_Samp_Fields = {
   __typename?: 'tag_problems_view_stddev_samp_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Tag_Problems_View_Stddev_Samp_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Tag_Problems_View_Sum_Fields = {
   __typename?: 'tag_problems_view_sum_fields',
  accepted_count?: Maybe<Scalars['Int']>,
  author_id?: Maybe<Scalars['Int']>,
  difficulty?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  negative_count?: Maybe<Scalars['Int']>,
  positive_count?: Maybe<Scalars['Int']>,
  submission_count?: Maybe<Scalars['Int']>,
  tag_id?: Maybe<Scalars['Int']>,
};

export type Tag_Problems_View_Sum_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Tag_Problems_View_Var_Pop_Fields = {
   __typename?: 'tag_problems_view_var_pop_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Tag_Problems_View_Var_Pop_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Tag_Problems_View_Var_Samp_Fields = {
   __typename?: 'tag_problems_view_var_samp_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Tag_Problems_View_Var_Samp_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export type Tag_Problems_View_Variance_Fields = {
   __typename?: 'tag_problems_view_variance_fields',
  accepted_count?: Maybe<Scalars['Float']>,
  author_id?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  negative_count?: Maybe<Scalars['Float']>,
  positive_count?: Maybe<Scalars['Float']>,
  submission_count?: Maybe<Scalars['Float']>,
  tag_id?: Maybe<Scalars['Float']>,
};

export type Tag_Problems_View_Variance_Order_By = {
  accepted_count?: Maybe<Order_By>,
  author_id?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  negative_count?: Maybe<Order_By>,
  positive_count?: Maybe<Order_By>,
  submission_count?: Maybe<Order_By>,
  tag_id?: Maybe<Order_By>,
};

export enum Tag_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Tag_Set_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type Tag_Stddev_Fields = {
   __typename?: 'tag_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Tag_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

export type Tag_Stddev_Pop_Fields = {
   __typename?: 'tag_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Tag_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type Tag_Stddev_Samp_Fields = {
   __typename?: 'tag_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Tag_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type Tag_Sum_Fields = {
   __typename?: 'tag_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type Tag_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

export enum Tag_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Tag_Var_Pop_Fields = {
   __typename?: 'tag_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Tag_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type Tag_Var_Samp_Fields = {
   __typename?: 'tag_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Tag_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type Tag_Variance_Fields = {
   __typename?: 'tag_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type Tag_Variance_Order_By = {
  id?: Maybe<Order_By>,
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

export type Upload_Test_Set_Response = {
   __typename?: 'upload_test_set_response',
  memory_limit: Scalars['Int'],
  time_limit: Scalars['Int'],
};

export type User = {
   __typename?: 'user',
  created_at: Scalars['timestamptz'],
  email: Scalars['String'],
  id: Scalars['Int'],
  name: Scalars['String'],
  password: Scalars['String'],
  problems: Array<Problem>,
  problems_aggregate: Problem_Aggregate,
  role: Scalars['String'],
};


export type UserProblemsArgs = {
  distinct_on?: Maybe<Array<Problem_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Order_By>>,
  where?: Maybe<Problem_Bool_Exp>
};


export type UserProblems_AggregateArgs = {
  distinct_on?: Maybe<Array<Problem_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Problem_Order_By>>,
  where?: Maybe<Problem_Bool_Exp>
};

export type User_Aggregate = {
   __typename?: 'user_aggregate',
  aggregate?: Maybe<User_Aggregate_Fields>,
  nodes: Array<User>,
};

export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields',
  avg?: Maybe<User_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<User_Max_Fields>,
  min?: Maybe<User_Min_Fields>,
  stddev?: Maybe<User_Stddev_Fields>,
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>,
  sum?: Maybe<User_Sum_Fields>,
  var_pop?: Maybe<User_Var_Pop_Fields>,
  var_samp?: Maybe<User_Var_Samp_Fields>,
  variance?: Maybe<User_Variance_Fields>,
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<User_Max_Order_By>,
  min?: Maybe<User_Min_Order_By>,
  stddev?: Maybe<User_Stddev_Order_By>,
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>,
  sum?: Maybe<User_Sum_Order_By>,
  var_pop?: Maybe<User_Var_Pop_Order_By>,
  var_samp?: Maybe<User_Var_Samp_Order_By>,
  variance?: Maybe<User_Variance_Order_By>,
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>,
};

export type User_Avg_Fields = {
   __typename?: 'user_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  _not?: Maybe<User_Bool_Exp>,
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  email?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  password?: Maybe<String_Comparison_Exp>,
  problems?: Maybe<Problem_Bool_Exp>,
  role?: Maybe<String_Comparison_Exp>,
};

export enum User_Constraint {
  UserEmailKey = 'user_email_key',
  UserNameKey = 'user_name_key',
  UserPkey = 'user_pkey'
}

export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

export type User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  problems?: Maybe<Problem_Arr_Rel_Insert_Input>,
  role?: Maybe<Scalars['String']>,
};

export type User_Max_Fields = {
   __typename?: 'user_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
};

export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
  role?: Maybe<Order_By>,
};

export type User_Min_Fields = {
   __typename?: 'user_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
};

export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
  role?: Maybe<Order_By>,
};

export type User_Mutation_Response = {
   __typename?: 'user_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<User>,
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input,
  on_conflict?: Maybe<User_On_Conflict>,
};

export type User_On_Conflict = {
  constraint: User_Constraint,
  update_columns: Array<User_Update_Column>,
  where?: Maybe<User_Bool_Exp>,
};

export type User_Order_By = {
  created_at?: Maybe<Order_By>,
  email?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  password?: Maybe<Order_By>,
  problems_aggregate?: Maybe<Problem_Aggregate_Order_By>,
  role?: Maybe<Order_By>,
};

export enum User_Select_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Role = 'role'
}

export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
};

export type User_Stddev_Fields = {
   __typename?: 'user_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Stddev_Pop_Fields = {
   __typename?: 'user_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Stddev_Samp_Fields = {
   __typename?: 'user_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Sum_Fields = {
   __typename?: 'user_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

export type User_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

export enum User_Update_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Role = 'role'
}

export type User_Var_Pop_Fields = {
   __typename?: 'user_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Var_Samp_Fields = {
   __typename?: 'user_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

export type User_Variance_Fields = {
   __typename?: 'user_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

export type User_Variance_Order_By = {
  id?: Maybe<Order_By>,
};


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type SignUpMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sign_up'>
);

export type LoginMutationVariables = {
  name: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'login_response' }
    & Pick<Login_Response, 'token'>
    & { user: (
      { __typename?: 'logged_user' }
      & Pick<Logged_User, 'id' | 'name' | 'email' | 'role'>
    ) }
  ) }
);

export type TagsQueryVariables = {};


export type TagsQuery = (
  { __typename?: 'Query' }
  & { tag: Array<(
    { __typename?: 'tag' }
    & Pick<Tag, 'id' | 'name'>
  )> }
);

export type InsertTagMutationVariables = {
  name: Scalars['String']
};


export type InsertTagMutation = (
  { __typename?: 'Mutation' }
  & { insert_tag: Maybe<(
    { __typename?: 'tag_mutation_response' }
    & { returning: Array<(
      { __typename?: 'tag' }
      & Pick<Tag, 'id' | 'name'>
    )> }
  )> }
);

export type DeleteTagMutationVariables = {
  id: Scalars['Int']
};


export type DeleteTagMutation = (
  { __typename?: 'Mutation' }
  & { delete_tag: Maybe<(
    { __typename?: 'tag_mutation_response' }
    & Pick<Tag_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateTagMutationVariables = {
  id: Scalars['Int'],
  name: Scalars['String']
};


export type UpdateTagMutation = (
  { __typename?: 'Mutation' }
  & { update_tag: Maybe<(
    { __typename?: 'tag_mutation_response' }
    & Pick<Tag_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertProblemMutationVariables = {
  background?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  difficulty: Scalars['Int'],
  input_format: Scalars['String'],
  output_format: Scalars['String'],
  note?: Maybe<Scalars['String']>,
  samples?: Maybe<Scalars['String']>,
  status: Scalars['String'],
  title: Scalars['String'],
  problem_tags: Array<Problem_Tag_Insert_Input>
};


export type InsertProblemMutation = (
  { __typename?: 'Mutation' }
  & { insert_problem: Maybe<(
    { __typename?: 'problem_mutation_response' }
    & { returning: Array<(
      { __typename?: 'problem' }
      & Pick<Problem, 'id'>
    )> }
  )> }
);

export type ProblemEditDataQueryVariables = {
  id: Scalars['Int']
};


export type ProblemEditDataQuery = (
  { __typename?: 'Query' }
  & { problem_by_pk: Maybe<(
    { __typename?: 'problem' }
    & Pick<Problem, 'background' | 'description' | 'difficulty' | 'id' | 'input_format' | 'output_format' | 'note' | 'time_limit' | 'memory_limit' | 'samples' | 'status' | 'title'>
    & { tags: Array<(
      { __typename?: 'problem_tags_view' }
      & Pick<Problem_Tags_View, 'id' | 'name'>
    )> }
  )>, tag: Array<(
    { __typename?: 'tag' }
    & Pick<Tag, 'id' | 'name'>
  )> }
);

export type DeleteProblemMutationVariables = {
  id: Scalars['Int']
};


export type DeleteProblemMutation = (
  { __typename?: 'Mutation' }
  & { delete_problem: Maybe<(
    { __typename?: 'problem_mutation_response' }
    & Pick<Problem_Mutation_Response, 'affected_rows'>
  )> }
);

export type UpdateProblemMutationVariables = {
  id: Scalars['Int'],
  background?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  difficulty: Scalars['Int'],
  input_format: Scalars['String'],
  output_format: Scalars['String'],
  note?: Maybe<Scalars['String']>,
  samples?: Maybe<Scalars['String']>,
  status: Scalars['String'],
  title: Scalars['String']
};


export type UpdateProblemMutation = (
  { __typename?: 'Mutation' }
  & { update_problem: Maybe<(
    { __typename?: 'problem_mutation_response' }
    & { returning: Array<(
      { __typename?: 'problem' }
      & Pick<Problem, 'id'>
    )> }
  )> }
);

export type ProblemDetailQueryVariables = {
  id: Scalars['Int'],
  user_id: Scalars['Int']
};


export type ProblemDetailQuery = (
  { __typename?: 'Query' }
  & { problem_by_pk: Maybe<(
    { __typename?: 'problem' }
    & Pick<Problem, 'background' | 'description' | 'difficulty' | 'id' | 'input_format' | 'note' | 'output_format' | 'samples' | 'status' | 'title' | 'time_limit' | 'memory_limit' | 'accepted_count' | 'submission_count' | 'positive_count' | 'negative_count'>
    & { tags: Array<(
      { __typename?: 'problem_tags_view' }
      & Pick<Problem_Tags_View, 'id' | 'name'>
    )>, author: Maybe<(
      { __typename?: 'user' }
      & Pick<User, 'id' | 'name'>
    )>, accepted_submissions_aggregate: (
      { __typename?: 'submission_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'submission_aggregate_fields' }
        & Pick<Submission_Aggregate_Fields, 'count'>
      )> }
    ), submissions_aggregate: (
      { __typename?: 'submission_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'submission_aggregate_fields' }
        & Pick<Submission_Aggregate_Fields, 'count'>
      )> }
    ), my_submissions_aggregate: (
      { __typename?: 'submission_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'submission_aggregate_fields' }
        & Pick<Submission_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type ProblemSetQueryVariables = {
  offset: Scalars['Int']
};


export type ProblemSetQuery = (
  { __typename?: 'Query' }
  & { problem_aggregate: (
    { __typename?: 'problem_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'problem_aggregate_fields' }
      & { total_count: Problem_Aggregate_Fields['count'] }
    )> }
  ), problem: Array<(
    { __typename?: 'problem' }
    & Pick<Problem, 'id' | 'title' | 'positive_count' | 'negative_count' | 'difficulty'>
    & { tags: Array<(
      { __typename?: 'problem_tags_view' }
      & Pick<Problem_Tags_View, 'id' | 'name'>
    )>, accepted_submissions_aggregate: (
      { __typename?: 'submission_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'submission_aggregate_fields' }
        & Pick<Submission_Aggregate_Fields, 'count'>
      )> }
    ), submissions_aggregate: (
      { __typename?: 'submission_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'submission_aggregate_fields' }
        & Pick<Submission_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type SubmissionsQueryVariables = {
  offset: Scalars['Int']
};


export type SubmissionsQuery = (
  { __typename?: 'Query' }
  & { submission_aggregate: (
    { __typename?: 'submission_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'submission_aggregate_fields' }
      & { total_count: Submission_Aggregate_Fields['count'] }
    )> }
  ), submission: Array<(
    { __typename?: 'submission' }
    & Pick<Submission, 'id' | 'status' | 'score' | 'time_usage' | 'memory_usage' | 'created_at'>
    & { problem: (
      { __typename?: 'problem' }
      & Pick<Problem, 'id' | 'title'>
    ), user: (
      { __typename?: 'user' }
      & Pick<User, 'id' | 'name'>
    ), code: (
      { __typename?: 'code' }
      & Pick<Code, 'lang'>
    ) }
  )> }
);

export type SubmissionDetailQueryVariables = {
  id: Scalars['uuid']
};


export type SubmissionDetailQuery = (
  { __typename?: 'Query' }
  & { submission_by_pk: Maybe<(
    { __typename?: 'submission' }
    & Pick<Submission, 'id' | 'status' | 'test_points' | 'created_at' | 'score' | 'time_usage' | 'memory_usage'>
    & { code: (
      { __typename?: 'code' }
      & Pick<Code, 'lang' | 'content'>
    ), user: (
      { __typename?: 'user' }
      & Pick<User, 'id' | 'name'>
    ), problem: (
      { __typename?: 'problem' }
      & Pick<Problem, 'id' | 'title'>
    ) }
  )> }
);

export type SubmitCodeMutationVariables = {
  problem_id: Scalars['ID'],
  lang: Scalars['String'],
  content: Scalars['String']
};


export type SubmitCodeMutation = (
  { __typename?: 'Mutation' }
  & { submit_code: (
    { __typename?: 'submit_code_response' }
    & Pick<Submit_Code_Response, 'submission_id'>
  ) }
);

export type SubmissionPartialDetailSubscriptionVariables = {
  id: Scalars['uuid']
};


export type SubmissionPartialDetailSubscription = (
  { __typename?: 'Subscription' }
  & { submission_by_pk: Maybe<(
    { __typename?: 'submission' }
    & Pick<Submission, 'status' | 'test_points' | 'score' | 'time_usage' | 'memory_usage'>
  )> }
);

export type UploadTestSetMutationVariables = {
  problem_id: Scalars['Int'],
  base64str: Scalars['String']
};


export type UploadTestSetMutation = (
  { __typename?: 'Mutation' }
  & { upload_test_set: (
    { __typename?: 'upload_test_set_response' }
    & Pick<Upload_Test_Set_Response, 'time_limit' | 'memory_limit'>
  ) }
);

export const SignUpDocument = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!) {
  sign_up(input: {name: $name, email: $email, password: $password})
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    document = SignUpDocument;
    
  }
export const LoginDocument = gql`
    mutation Login($name: String!, $password: String!) {
  login(input: {name: $name, password: $password}) {
    token
    user {
      id
      name
      email
      role
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const TagsDocument = gql`
    query Tags {
  tag {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TagsGQL extends Apollo.Query<TagsQuery, TagsQueryVariables> {
    document = TagsDocument;
    
  }
export const InsertTagDocument = gql`
    mutation InsertTag($name: String!) {
  insert_tag(objects: {name: $name}) {
    returning {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertTagGQL extends Apollo.Mutation<InsertTagMutation, InsertTagMutationVariables> {
    document = InsertTagDocument;
    
  }
export const DeleteTagDocument = gql`
    mutation DeleteTag($id: Int!) {
  delete_tag(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTagGQL extends Apollo.Mutation<DeleteTagMutation, DeleteTagMutationVariables> {
    document = DeleteTagDocument;
    
  }
export const UpdateTagDocument = gql`
    mutation UpdateTag($id: Int!, $name: String!) {
  update_tag(where: {id: {_eq: $id}}, _set: {name: $name}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTagGQL extends Apollo.Mutation<UpdateTagMutation, UpdateTagMutationVariables> {
    document = UpdateTagDocument;
    
  }
export const InsertProblemDocument = gql`
    mutation InsertProblem($background: String, $description: String!, $difficulty: Int!, $input_format: String!, $output_format: String!, $note: String, $samples: String, $status: String!, $title: String!, $problem_tags: [problem_tag_insert_input!]!) {
  insert_problem(objects: {background: $background, description: $description, difficulty: $difficulty, input_format: $input_format, note: $note, output_format: $output_format, samples: $samples, status: $status, title: $title, problem_tags: {data: $problem_tags}}) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertProblemGQL extends Apollo.Mutation<InsertProblemMutation, InsertProblemMutationVariables> {
    document = InsertProblemDocument;
    
  }
export const ProblemEditDataDocument = gql`
    query ProblemEditData($id: Int!) {
  problem_by_pk(id: $id) {
    background
    description
    difficulty
    id
    input_format
    output_format
    note
    time_limit
    memory_limit
    samples
    status
    title
    tags {
      id
      name
    }
  }
  tag {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProblemEditDataGQL extends Apollo.Query<ProblemEditDataQuery, ProblemEditDataQueryVariables> {
    document = ProblemEditDataDocument;
    
  }
export const DeleteProblemDocument = gql`
    mutation DeleteProblem($id: Int!) {
  delete_problem(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteProblemGQL extends Apollo.Mutation<DeleteProblemMutation, DeleteProblemMutationVariables> {
    document = DeleteProblemDocument;
    
  }
export const UpdateProblemDocument = gql`
    mutation UpdateProblem($id: Int!, $background: String, $description: String!, $difficulty: Int!, $input_format: String!, $output_format: String!, $note: String, $samples: String, $status: String!, $title: String!) {
  update_problem(where: {id: {_eq: $id}}, _set: {id: $id, background: $background, description: $description, difficulty: $difficulty, input_format: $input_format, note: $note, output_format: $output_format, samples: $samples, status: $status, title: $title}) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProblemGQL extends Apollo.Mutation<UpdateProblemMutation, UpdateProblemMutationVariables> {
    document = UpdateProblemDocument;
    
  }
export const ProblemDetailDocument = gql`
    query ProblemDetail($id: Int!, $user_id: Int!) {
  problem_by_pk(id: $id) {
    background
    description
    difficulty
    id
    input_format
    note
    output_format
    samples
    status
    title
    tags {
      id
      name
    }
    time_limit
    memory_limit
    accepted_count
    submission_count
    positive_count
    negative_count
    author {
      id
      name
    }
    accepted_submissions_aggregate: submissions_aggregate(where: {status: {_eq: "Accepted"}}) {
      aggregate {
        count
      }
    }
    submissions_aggregate {
      aggregate {
        count
      }
    }
    my_submissions_aggregate: submissions_aggregate(where: {user_id: {_eq: $user_id}}) {
      aggregate {
        count
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProblemDetailGQL extends Apollo.Query<ProblemDetailQuery, ProblemDetailQueryVariables> {
    document = ProblemDetailDocument;
    
  }
export const ProblemSetDocument = gql`
    query ProblemSet($offset: Int!) {
  problem_aggregate {
    aggregate {
      total_count: count
    }
  }
  problem(offset: $offset, limit: 15, order_by: {id: asc}) {
    id
    title
    tags {
      id
      name
    }
    positive_count
    negative_count
    difficulty
    accepted_submissions_aggregate: submissions_aggregate(where: {status: {_eq: "Accepted"}}) {
      aggregate {
        count
      }
    }
    submissions_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProblemSetGQL extends Apollo.Query<ProblemSetQuery, ProblemSetQueryVariables> {
    document = ProblemSetDocument;
    
  }
export const SubmissionsDocument = gql`
    query Submissions($offset: Int!) {
  submission_aggregate {
    aggregate {
      total_count: count
    }
  }
  submission(offset: $offset, limit: 10, order_by: {created_at: desc}) {
    id
    problem {
      id
      title
    }
    user {
      id
      name
    }
    status
    score
    time_usage
    memory_usage
    code {
      lang
    }
    created_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmissionsGQL extends Apollo.Query<SubmissionsQuery, SubmissionsQueryVariables> {
    document = SubmissionsDocument;
    
  }
export const SubmissionDetailDocument = gql`
    query SubmissionDetail($id: uuid!) {
  submission_by_pk(id: $id) {
    id
    status
    test_points
    code {
      lang
      content
    }
    user {
      id
      name
    }
    problem {
      id
      title
    }
    created_at
    score
    time_usage
    memory_usage
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmissionDetailGQL extends Apollo.Query<SubmissionDetailQuery, SubmissionDetailQueryVariables> {
    document = SubmissionDetailDocument;
    
  }
export const SubmitCodeDocument = gql`
    mutation SubmitCode($problem_id: ID!, $lang: String!, $content: String!) {
  submit_code(input: {problem_id: $problem_id, lang: $lang, content: $content}) {
    submission_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitCodeGQL extends Apollo.Mutation<SubmitCodeMutation, SubmitCodeMutationVariables> {
    document = SubmitCodeDocument;
    
  }
export const SubmissionPartialDetailDocument = gql`
    subscription SubmissionPartialDetail($id: uuid!) {
  submission_by_pk(id: $id) {
    status
    test_points
    score
    time_usage
    memory_usage
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmissionPartialDetailGQL extends Apollo.Subscription<SubmissionPartialDetailSubscription, SubmissionPartialDetailSubscriptionVariables> {
    document = SubmissionPartialDetailDocument;
    
  }
export const UploadTestSetDocument = gql`
    mutation UploadTestSet($problem_id: Int!, $base64str: String!) {
  upload_test_set(base64str: $base64str, problem_id: $problem_id) {
    time_limit
    memory_limit
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UploadTestSetGQL extends Apollo.Mutation<UploadTestSetMutation, UploadTestSetMutationVariables> {
    document = UploadTestSetDocument;
    
  }