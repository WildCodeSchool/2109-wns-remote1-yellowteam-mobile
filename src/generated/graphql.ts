import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _count: Maybe<CommentCountAggregate>;
  _max: Maybe<CommentMaxAggregate>;
  _min: Maybe<CommentMinAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg: Maybe<FileAvgAggregate>;
  _count: Maybe<FileCountAggregate>;
  _max: Maybe<FileMaxAggregate>;
  _min: Maybe<FileMinAggregate>;
  _sum: Maybe<FileSumAggregate>;
};

export type AggregateInvitation = {
  __typename?: 'AggregateInvitation';
  _count: Maybe<InvitationCountAggregate>;
  _max: Maybe<InvitationMaxAggregate>;
  _min: Maybe<InvitationMinAggregate>;
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification';
  _count: Maybe<NotificationCountAggregate>;
  _max: Maybe<NotificationMaxAggregate>;
  _min: Maybe<NotificationMinAggregate>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  _avg: Maybe<ProjectAvgAggregate>;
  _count: Maybe<ProjectCountAggregate>;
  _max: Maybe<ProjectMaxAggregate>;
  _min: Maybe<ProjectMinAggregate>;
  _sum: Maybe<ProjectSumAggregate>;
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  _avg: Maybe<TaskAvgAggregate>;
  _count: Maybe<TaskCountAggregate>;
  _max: Maybe<TaskMaxAggregate>;
  _min: Maybe<TaskMinAggregate>;
  _sum: Maybe<TaskSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  project: Maybe<Project>;
  project_comment_user_id: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  task: Maybe<Task>;
  task_comment_user_id: Maybe<Scalars['String']>;
  task_id: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  user_project_comments: Maybe<User>;
  user_task_comments: Maybe<User>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  project_comment_user_id: Scalars['Int'];
  project_id: Scalars['Int'];
  task_comment_user_id: Scalars['Int'];
  task_id: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  project_comment_user_id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  task_comment_user_id?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project?: InputMaybe<ProjectCreateNestedOneWithoutCommentsInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutCommentsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_project_comments?: InputMaybe<UserCreateNestedOneWithoutProject_CommentsInput>;
  user_task_comments?: InputMaybe<UserCreateNestedOneWithoutTask_CommentsInput>;
};

export type CommentCreateManyInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project_comment_user_id?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  task_comment_user_id?: InputMaybe<Scalars['String']>;
  task_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyProjectInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project_comment_user_id?: InputMaybe<Scalars['String']>;
  task_comment_user_id?: InputMaybe<Scalars['String']>;
  task_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyProjectInputEnvelope = {
  data: Array<CommentCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyTaskInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project_comment_user_id?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  task_comment_user_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyTaskInputEnvelope = {
  data: Array<CommentCreateManyTaskInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyUser_Project_CommentsInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project_comment_user_id?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  task_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyUser_Project_CommentsInputEnvelope = {
  data: Array<CommentCreateManyUser_Project_CommentsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyUser_Task_CommentsInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project_id?: InputMaybe<Scalars['String']>;
  task_comment_user_id?: InputMaybe<Scalars['String']>;
  task_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyUser_Task_CommentsInputEnvelope = {
  data: Array<CommentCreateManyUser_Task_CommentsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutProjectInput>>;
  createMany?: InputMaybe<CommentCreateManyProjectInputEnvelope>;
};

export type CommentCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutTaskInput>>;
  createMany?: InputMaybe<CommentCreateManyTaskInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUser_Project_CommentsInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUser_Project_CommentsInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUser_Project_CommentsInput>>;
  createMany?: InputMaybe<CommentCreateManyUser_Project_CommentsInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUser_Task_CommentsInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUser_Task_CommentsInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUser_Task_CommentsInput>>;
  createMany?: InputMaybe<CommentCreateManyUser_Task_CommentsInputEnvelope>;
};

export type CommentCreateOrConnectWithoutProjectInput = {
  create: CommentCreateWithoutProjectInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutTaskInput = {
  create: CommentCreateWithoutTaskInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUser_Project_CommentsInput = {
  create: CommentCreateWithoutUser_Project_CommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUser_Task_CommentsInput = {
  create: CommentCreateWithoutUser_Task_CommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutProjectInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  task?: InputMaybe<TaskCreateNestedOneWithoutCommentsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_project_comments?: InputMaybe<UserCreateNestedOneWithoutProject_CommentsInput>;
  user_task_comments?: InputMaybe<UserCreateNestedOneWithoutTask_CommentsInput>;
};

export type CommentCreateWithoutTaskInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project?: InputMaybe<ProjectCreateNestedOneWithoutCommentsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_project_comments?: InputMaybe<UserCreateNestedOneWithoutProject_CommentsInput>;
  user_task_comments?: InputMaybe<UserCreateNestedOneWithoutTask_CommentsInput>;
};

export type CommentCreateWithoutUser_Project_CommentsInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project?: InputMaybe<ProjectCreateNestedOneWithoutCommentsInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutCommentsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_task_comments?: InputMaybe<UserCreateNestedOneWithoutTask_CommentsInput>;
};

export type CommentCreateWithoutUser_Task_CommentsInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  project?: InputMaybe<ProjectCreateNestedOneWithoutCommentsInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutCommentsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_project_comments?: InputMaybe<UserCreateNestedOneWithoutProject_CommentsInput>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _count: Maybe<CommentCountAggregate>;
  _max: Maybe<CommentMaxAggregate>;
  _min: Maybe<CommentMinAggregate>;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  project_comment_user_id: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  task_comment_user_id: Maybe<Scalars['String']>;
  task_id: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  project_comment_user_id: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  task_comment_user_id: Maybe<Scalars['String']>;
  task_id: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CommentMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  project_comment_user_id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  task_comment_user_id?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  project_comment_user_id: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  task_comment_user_id: Maybe<Scalars['String']>;
  task_id: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CommentMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  project_comment_user_id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  task_comment_user_id?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  project_comment_user_id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  task_comment_user_id?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  project_comment_user_id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  task_comment_user_id?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_project_comments?: InputMaybe<UserOrderByWithRelationInput>;
  user_task_comments?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum CommentScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  IsDisabled = 'is_disabled',
  ProjectCommentUserId = 'project_comment_user_id',
  ProjectId = 'project_id',
  TaskCommentUserId = 'task_comment_user_id',
  TaskId = 'task_id',
  UpdatedAt = 'updated_at'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  project_comment_user_id?: InputMaybe<StringNullableFilter>;
  project_id?: InputMaybe<StringNullableFilter>;
  task_comment_user_id?: InputMaybe<StringNullableFilter>;
  task_id?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  project_comment_user_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  project_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  task_comment_user_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  task_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CommentUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutCommentsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutCommentsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_project_comments?: InputMaybe<UserUpdateOneWithoutProject_CommentsInput>;
  user_task_comments?: InputMaybe<UserUpdateOneWithoutTask_CommentsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutProjectInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutTaskInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUser_Project_CommentsInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUser_Task_CommentsInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutProjectInput>>;
  createMany?: InputMaybe<CommentCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type CommentUpdateManyWithoutTaskInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutTaskInput>>;
  createMany?: InputMaybe<CommentCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type CommentUpdateManyWithoutUser_Project_CommentsInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUser_Project_CommentsInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUser_Project_CommentsInput>>;
  createMany?: InputMaybe<CommentCreateManyUser_Project_CommentsInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUser_Project_CommentsInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUser_Project_CommentsInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUser_Project_CommentsInput>>;
};

export type CommentUpdateManyWithoutUser_Task_CommentsInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUser_Task_CommentsInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUser_Task_CommentsInput>>;
  createMany?: InputMaybe<CommentCreateManyUser_Task_CommentsInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUser_Task_CommentsInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUser_Task_CommentsInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUser_Task_CommentsInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutProjectInput = {
  data: CommentUpdateWithoutProjectInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
  data: CommentUpdateWithoutTaskInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUser_Project_CommentsInput = {
  data: CommentUpdateWithoutUser_Project_CommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUser_Task_CommentsInput = {
  data: CommentUpdateWithoutUser_Task_CommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutProjectInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutCommentsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_project_comments?: InputMaybe<UserUpdateOneWithoutProject_CommentsInput>;
  user_task_comments?: InputMaybe<UserUpdateOneWithoutTask_CommentsInput>;
};

export type CommentUpdateWithoutTaskInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutCommentsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_project_comments?: InputMaybe<UserUpdateOneWithoutProject_CommentsInput>;
  user_task_comments?: InputMaybe<UserUpdateOneWithoutTask_CommentsInput>;
};

export type CommentUpdateWithoutUser_Project_CommentsInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutCommentsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutCommentsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_task_comments?: InputMaybe<UserUpdateOneWithoutTask_CommentsInput>;
};

export type CommentUpdateWithoutUser_Task_CommentsInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutCommentsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutCommentsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_project_comments?: InputMaybe<UserUpdateOneWithoutProject_CommentsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutProjectInput = {
  create: CommentCreateWithoutProjectInput;
  update: CommentUpdateWithoutProjectInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
  create: CommentCreateWithoutTaskInput;
  update: CommentUpdateWithoutTaskInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUser_Project_CommentsInput = {
  create: CommentCreateWithoutUser_Project_CommentsInput;
  update: CommentUpdateWithoutUser_Project_CommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUser_Task_CommentsInput = {
  create: CommentCreateWithoutUser_Task_CommentsInput;
  update: CommentUpdateWithoutUser_Task_CommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  project_comment_user_id?: InputMaybe<StringNullableFilter>;
  project_id?: InputMaybe<StringNullableFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  task_comment_user_id?: InputMaybe<StringNullableFilter>;
  task_id?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_project_comments?: InputMaybe<UserRelationFilter>;
  user_task_comments?: InputMaybe<UserRelationFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Status>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatus_InvitationFieldUpdateOperationsInput = {
  set?: InputMaybe<Status_Invitation>;
};

export type EnumStatus_InvitationFilter = {
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type EnumStatus_InvitationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  _min?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type EnumStatus_NotificationFieldUpdateOperationsInput = {
  set?: InputMaybe<Status_Notification>;
};

export type EnumStatus_NotificationFilter = {
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type EnumStatus_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  _min?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type EnumType_NotificationFieldUpdateOperationsInput = {
  set?: InputMaybe<Type_Notification>;
};

export type EnumType_NotificationFilter = {
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type EnumType_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumType_NotificationFilter>;
  _min?: InputMaybe<NestedEnumType_NotificationFilter>;
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type File = {
  __typename?: 'File';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: Project;
  project_id: Scalars['String'];
  size: Scalars['Int'];
  task: Maybe<Task>;
  task_id: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['String'];
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  size: Maybe<Scalars['Float']>;
};

export type FileAvgOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
  project_id: Scalars['Int'];
  size: Scalars['Int'];
  task_id: Scalars['Int'];
  type: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type FileCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: ProjectCreateNestedOneWithoutFilesInput;
  size: Scalars['Int'];
  task?: InputMaybe<TaskCreateNestedOneWithoutFilesInput>;
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project_id: Scalars['String'];
  size: Scalars['Int'];
  task_id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type FileCreateManyProjectInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  task_id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type FileCreateManyProjectInputEnvelope = {
  data: Array<FileCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateManyTaskInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project_id: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type FileCreateManyTaskInputEnvelope = {
  data: Array<FileCreateManyTaskInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateManyUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project_id: Scalars['String'];
  size: Scalars['Int'];
  task_id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateManyUserInputEnvelope = {
  data: Array<FileCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<FileCreateWithoutProjectInput>>;
  createMany?: InputMaybe<FileCreateManyProjectInputEnvelope>;
};

export type FileCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<FileCreateWithoutTaskInput>>;
  createMany?: InputMaybe<FileCreateManyTaskInputEnvelope>;
};

export type FileCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
};

export type FileCreateOrConnectWithoutProjectInput = {
  create: FileCreateWithoutProjectInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutTaskInput = {
  create: FileCreateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutProjectInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  task?: InputMaybe<TaskCreateNestedOneWithoutFilesInput>;
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateWithoutTaskInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: ProjectCreateNestedOneWithoutFilesInput;
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project: ProjectCreateNestedOneWithoutFilesInput;
  size: Scalars['Int'];
  task?: InputMaybe<TaskCreateNestedOneWithoutFilesInput>;
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg: Maybe<FileAvgAggregate>;
  _count: Maybe<FileCountAggregate>;
  _max: Maybe<FileMaxAggregate>;
  _min: Maybe<FileMinAggregate>;
  _sum: Maybe<FileSumAggregate>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  project_id: Scalars['String'];
  size: Scalars['Int'];
  task_id: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  task_id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type FileMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  task_id: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type FileMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  task_id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  project_id?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  task_id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum FileScalarFieldEnum {
  CreatedAt = 'created_at',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Name = 'name',
  Path = 'path',
  ProjectId = 'project_id',
  Size = 'size',
  TaskId = 'task_id',
  Type = 'type',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  project_id?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  task_id?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  path?: InputMaybe<StringWithAggregatesFilter>;
  project_id?: InputMaybe<StringWithAggregatesFilter>;
  size?: InputMaybe<IntWithAggregatesFilter>;
  task_id?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  size: Maybe<Scalars['Int']>;
};

export type FileSumOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutFilesInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutFilesInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutProjectInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithWhereWithoutTaskInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithWhereWithoutUserInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<FileCreateWithoutProjectInput>>;
  createMany?: InputMaybe<FileCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type FileUpdateManyWithoutTaskInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<FileCreateWithoutTaskInput>>;
  createMany?: InputMaybe<FileCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type FileUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FileUpdateWithWhereUniqueWithoutProjectInput = {
  data: FileUpdateWithoutProjectInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithWhereUniqueWithoutTaskInput = {
  data: FileUpdateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
  data: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutProjectInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutFilesInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateWithoutTaskInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutFilesInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutFilesInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneWithoutFilesInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutProjectInput = {
  create: FileCreateWithoutProjectInput;
  update: FileUpdateWithoutProjectInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithWhereUniqueWithoutTaskInput = {
  create: FileCreateWithoutTaskInput;
  update: FileUpdateWithoutTaskInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  update: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  project_id?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  task_id?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Invitation = {
  __typename?: 'Invitation';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  project: Project;
  project_id: Scalars['String'];
  status: Status_Invitation;
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['String'];
};

export type InvitationCountAggregate = {
  __typename?: 'InvitationCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  project_id: Scalars['Int'];
  status: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type InvitationCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type InvitationCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutInvitationsInput;
  status: Status_Invitation;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutInvitationsInput;
};

export type InvitationCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  project_id: Scalars['String'];
  status: Status_Invitation;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type InvitationCreateManyProjectInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  status: Status_Invitation;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type InvitationCreateManyProjectInputEnvelope = {
  data: Array<InvitationCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationCreateManyUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  project_id: Scalars['String'];
  status: Status_Invitation;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type InvitationCreateManyUserInputEnvelope = {
  data: Array<InvitationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InvitationCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutProjectInput>>;
  createMany?: InputMaybe<InvitationCreateManyProjectInputEnvelope>;
};

export type InvitationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutUserInput>>;
  createMany?: InputMaybe<InvitationCreateManyUserInputEnvelope>;
};

export type InvitationCreateOrConnectWithoutProjectInput = {
  create: InvitationCreateWithoutProjectInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationCreateOrConnectWithoutUserInput = {
  create: InvitationCreateWithoutUserInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationCreateWithoutProjectInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  status: Status_Invitation;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutInvitationsInput;
};

export type InvitationCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutInvitationsInput;
  status: Status_Invitation;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type InvitationGroupBy = {
  __typename?: 'InvitationGroupBy';
  _count: Maybe<InvitationCountAggregate>;
  _max: Maybe<InvitationMaxAggregate>;
  _min: Maybe<InvitationMinAggregate>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  project_id: Scalars['String'];
  status: Status_Invitation;
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type InvitationListRelationFilter = {
  every?: InputMaybe<InvitationWhereInput>;
  none?: InputMaybe<InvitationWhereInput>;
  some?: InputMaybe<InvitationWhereInput>;
};

export type InvitationMaxAggregate = {
  __typename?: 'InvitationMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  status: Maybe<Status_Invitation>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type InvitationMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type InvitationMinAggregate = {
  __typename?: 'InvitationMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  project_id: Maybe<Scalars['String']>;
  status: Maybe<Status_Invitation>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type InvitationMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type InvitationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InvitationOrderByWithAggregationInput = {
  _count?: InputMaybe<InvitationCountOrderByAggregateInput>;
  _max?: InputMaybe<InvitationMaxOrderByAggregateInput>;
  _min?: InputMaybe<InvitationMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type InvitationOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  project_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum InvitationScalarFieldEnum {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  ProjectId = 'project_id',
  Status = 'status',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type InvitationScalarWhereInput = {
  AND?: InputMaybe<Array<InvitationScalarWhereInput>>;
  NOT?: InputMaybe<Array<InvitationScalarWhereInput>>;
  OR?: InputMaybe<Array<InvitationScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  project_id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_InvitationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type InvitationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InvitationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InvitationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InvitationScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  project_id?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumStatus_InvitationWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type InvitationUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutInvitationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInvitationsInput>;
};

export type InvitationUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvitationUpdateManyWithWhereWithoutProjectInput = {
  data: InvitationUpdateManyMutationInput;
  where: InvitationScalarWhereInput;
};

export type InvitationUpdateManyWithWhereWithoutUserInput = {
  data: InvitationUpdateManyMutationInput;
  where: InvitationScalarWhereInput;
};

export type InvitationUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutProjectInput>>;
  createMany?: InputMaybe<InvitationCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvitationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  update?: InputMaybe<Array<InvitationUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<InvitationUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<InvitationUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type InvitationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvitationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<InvitationCreateWithoutUserInput>>;
  createMany?: InputMaybe<InvitationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvitationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  set?: InputMaybe<Array<InvitationWhereUniqueInput>>;
  update?: InputMaybe<Array<InvitationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<InvitationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<InvitationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type InvitationUpdateWithWhereUniqueWithoutProjectInput = {
  data: InvitationUpdateWithoutProjectInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateWithWhereUniqueWithoutUserInput = {
  data: InvitationUpdateWithoutUserInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpdateWithoutProjectInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInvitationsInput>;
};

export type InvitationUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutInvitationsInput>;
  status?: InputMaybe<EnumStatus_InvitationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvitationUpsertWithWhereUniqueWithoutProjectInput = {
  create: InvitationCreateWithoutProjectInput;
  update: InvitationUpdateWithoutProjectInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationUpsertWithWhereUniqueWithoutUserInput = {
  create: InvitationCreateWithoutUserInput;
  update: InvitationUpdateWithoutUserInput;
  where: InvitationWhereUniqueInput;
};

export type InvitationWhereInput = {
  AND?: InputMaybe<Array<InvitationWhereInput>>;
  NOT?: InputMaybe<Array<InvitationWhereInput>>;
  OR?: InputMaybe<Array<InvitationWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  project_id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_InvitationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type InvitationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createFile: File;
  createInvitation: Invitation;
  createManyComment: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyInvitation: AffectedRowsOutput;
  createManyNotification: AffectedRowsOutput;
  createManyProject: AffectedRowsOutput;
  createManyTask: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createNotification: Notification;
  createProject: Project;
  createTask: Task;
  createUser: User;
  deleteComment: Maybe<Comment>;
  deleteFile: Maybe<File>;
  deleteInvitation: Maybe<Invitation>;
  deleteManyComment: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyInvitation: AffectedRowsOutput;
  deleteManyNotification: AffectedRowsOutput;
  deleteManyProject: AffectedRowsOutput;
  deleteManyTask: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteNotification: Maybe<Notification>;
  deleteProject: Maybe<Project>;
  deleteTask: Maybe<Task>;
  deleteUser: Maybe<User>;
  login: User;
  logout: Scalars['String'];
  me: User;
  register: User;
  updateComment: Maybe<Comment>;
  updateFile: Maybe<File>;
  updateInvitation: Maybe<Invitation>;
  updateManyComment: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyInvitation: AffectedRowsOutput;
  updateManyNotification: AffectedRowsOutput;
  updateManyProject: AffectedRowsOutput;
  updateManyTask: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateNotification: Maybe<Notification>;
  updateProject: Maybe<Project>;
  updateTask: Maybe<Task>;
  updateUser: Maybe<User>;
  uploadFile: File;
  upsertComment: Comment;
  upsertFile: File;
  upsertInvitation: Invitation;
  upsertNotification: Notification;
  upsertProject: Project;
  upsertTask: Task;
  upsertUser: User;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateInvitationArgs = {
  data: InvitationCreateInput;
};


export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyInvitationArgs = {
  data: Array<InvitationCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNotificationArgs = {
  data: Array<NotificationCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProjectArgs = {
  data: Array<ProjectCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTaskArgs = {
  data: Array<TaskCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type MutationDeleteManyCommentArgs = {
  where: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyInvitationArgs = {
  where: InputMaybe<InvitationWhereInput>;
};


export type MutationDeleteManyNotificationArgs = {
  where: InputMaybe<NotificationWhereInput>;
};


export type MutationDeleteManyProjectArgs = {
  where: InputMaybe<ProjectWhereInput>;
};


export type MutationDeleteManyTaskArgs = {
  where: InputMaybe<TaskWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where: InputMaybe<UserWhereInput>;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateInvitationArgs = {
  data: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyInvitationArgs = {
  data: InvitationUpdateManyMutationInput;
  where: InputMaybe<InvitationWhereInput>;
};


export type MutationUpdateManyNotificationArgs = {
  data: NotificationUpdateManyMutationInput;
  where: InputMaybe<NotificationWhereInput>;
};


export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput;
  where: InputMaybe<ProjectWhereInput>;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where: InputMaybe<TaskWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where: InputMaybe<UserWhereInput>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type MutationUpsertCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertInvitationArgs = {
  create: InvitationCreateInput;
  update: InvitationUpdateInput;
  where: InvitationWhereUniqueInput;
};


export type MutationUpsertNotificationArgs = {
  create: NotificationCreateInput;
  update: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatus_InvitationFilter = {
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type NestedEnumStatus_InvitationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  _min?: InputMaybe<NestedEnumStatus_InvitationFilter>;
  equals?: InputMaybe<Status_Invitation>;
  in?: InputMaybe<Array<Status_Invitation>>;
  not?: InputMaybe<NestedEnumStatus_InvitationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Invitation>>;
};

export type NestedEnumStatus_NotificationFilter = {
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type NestedEnumStatus_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  _min?: InputMaybe<NestedEnumStatus_NotificationFilter>;
  equals?: InputMaybe<Status_Notification>;
  in?: InputMaybe<Array<Status_Notification>>;
  not?: InputMaybe<NestedEnumStatus_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status_Notification>>;
};

export type NestedEnumType_NotificationFilter = {
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type NestedEnumType_NotificationWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumType_NotificationFilter>;
  _min?: InputMaybe<NestedEnumType_NotificationFilter>;
  equals?: InputMaybe<Type_Notification>;
  in?: InputMaybe<Array<Type_Notification>>;
  not?: InputMaybe<NestedEnumType_NotificationWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Type_Notification>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  sender: User;
  sender_id: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['String'];
};

export type NotificationCountAggregate = {
  __typename?: 'NotificationCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  reference_id: Scalars['Int'];
  sender_id: Scalars['Int'];
  status: Scalars['Int'];
  title: Scalars['Int'];
  type: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type NotificationCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  sender_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type NotificationCreateInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  sender: UserCreateNestedOneWithoutNotifications_SentInput;
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateManyInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  sender_id: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type NotificationCreateManySenderInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type NotificationCreateManySenderInputEnvelope = {
  data: Array<NotificationCreateManySenderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateManyUserInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  sender_id: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationCreateManyUserInputEnvelope = {
  data: Array<NotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutSenderInput>>;
  createMany?: InputMaybe<NotificationCreateManySenderInputEnvelope>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutSenderInput = {
  create: NotificationCreateWithoutSenderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutSenderInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateWithoutUserInput = {
  content: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  sender: UserCreateNestedOneWithoutNotifications_SentInput;
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationGroupBy = {
  __typename?: 'NotificationGroupBy';
  _count: Maybe<NotificationCountAggregate>;
  _max: Maybe<NotificationMaxAggregate>;
  _min: Maybe<NotificationMinAggregate>;
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  reference_id: Scalars['String'];
  sender_id: Scalars['String'];
  status: Status_Notification;
  title: Scalars['String'];
  type: Type_Notification;
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationMaxAggregate = {
  __typename?: 'NotificationMaxAggregate';
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  reference_id: Maybe<Scalars['String']>;
  sender_id: Maybe<Scalars['String']>;
  status: Maybe<Status_Notification>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Type_Notification>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type NotificationMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  sender_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type NotificationMinAggregate = {
  __typename?: 'NotificationMinAggregate';
  content: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  reference_id: Maybe<Scalars['String']>;
  sender_id: Maybe<Scalars['String']>;
  status: Maybe<Status_Notification>;
  title: Maybe<Scalars['String']>;
  type: Maybe<Type_Notification>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type NotificationMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  sender_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithAggregationInput = {
  _count?: InputMaybe<NotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<NotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotificationMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  sender_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  reference_id?: InputMaybe<SortOrder>;
  sender?: InputMaybe<UserOrderByWithRelationInput>;
  sender_id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'created_at',
  Id = 'id',
  IsDisabled = 'is_disabled',
  ReferenceId = 'reference_id',
  SenderId = 'sender_id',
  Status = 'status',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  reference_id?: InputMaybe<StringFilter>;
  sender_id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_NotificationFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumType_NotificationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type NotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  reference_id?: InputMaybe<StringWithAggregatesFilter>;
  sender_id?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumStatus_NotificationWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumType_NotificationWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type NotificationUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reference_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutNotifications_SentInput>;
  status?: InputMaybe<EnumStatus_NotificationFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumType_NotificationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reference_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_NotificationFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumType_NotificationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutSenderInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutSenderInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutSenderInput>>;
  createMany?: InputMaybe<NotificationCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutSenderInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type NotificationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateWithWhereUniqueWithoutSenderInput = {
  data: NotificationUpdateWithoutSenderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutSenderInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reference_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatus_NotificationFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumType_NotificationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  reference_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutNotifications_SentInput>;
  status?: InputMaybe<EnumStatus_NotificationFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumType_NotificationFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutSenderInput = {
  create: NotificationCreateWithoutSenderInput;
  update: NotificationUpdateWithoutSenderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  reference_id?: InputMaybe<StringFilter>;
  sender?: InputMaybe<UserRelationFilter>;
  sender_id?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatus_NotificationFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumType_NotificationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count: Maybe<ProjectCount>;
  comments: Array<Comment>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files: Array<File>;
  id: Scalars['String'];
  invitations: Array<Invitation>;
  is_disabled: Scalars['Boolean'];
  owner: User;
  private: Scalars['Boolean'];
  project_owner_id: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks: Array<Task>;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at: Scalars['DateTime'];
  users: Array<User>;
};


export type ProjectCommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type ProjectFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type ProjectInvitationsArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type ProjectTasksArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type ProjectUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};

export type ProjectAvgAggregate = {
  __typename?: 'ProjectAvgAggregate';
  total_time_spent: Maybe<Scalars['Float']>;
};

export type ProjectAvgOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  comments: Scalars['Int'];
  files: Scalars['Int'];
  invitations: Scalars['Int'];
  tasks: Scalars['Int'];
  users: Scalars['Int'];
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  due_date: Scalars['Int'];
  end_date: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  private: Scalars['Int'];
  project_owner_id: Scalars['Int'];
  start_date: Scalars['Int'];
  status_project: Scalars['Int'];
  title: Scalars['Int'];
  total_time_spent: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type ProjectCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_owner_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ProjectCreateInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutProjectInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  owner: UserCreateNestedOneWithoutOwned_ProjectsInput;
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project_owner_id: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyOwnerInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyOwnerInputEnvelope = {
  data: Array<ProjectCreateManyOwnerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ProjectCreateManyOwnerInputEnvelope>;
};

export type ProjectCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutUsersInput>>;
};

export type ProjectCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ProjectCreateWithoutCommentsInput>;
};

export type ProjectCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<ProjectCreateWithoutFilesInput>;
};

export type ProjectCreateNestedOneWithoutInvitationsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<ProjectCreateWithoutInvitationsInput>;
};

export type ProjectCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<ProjectCreateWithoutTasksInput>;
};

export type ProjectCreateOrConnectWithoutCommentsInput = {
  create: ProjectCreateWithoutCommentsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutFilesInput = {
  create: ProjectCreateWithoutFilesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutInvitationsInput = {
  create: ProjectCreateWithoutInvitationsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutOwnerInput = {
  create: ProjectCreateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutTasksInput = {
  create: ProjectCreateWithoutTasksInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutUsersInput = {
  create: ProjectCreateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutCommentsInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  owner: UserCreateNestedOneWithoutOwned_ProjectsInput;
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutFilesInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutProjectInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  owner: UserCreateNestedOneWithoutOwned_ProjectsInput;
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutInvitationsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutProjectInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  owner: UserCreateNestedOneWithoutOwned_ProjectsInput;
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutOwnerInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutProjectInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutTasksInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutProjectInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  owner: UserCreateNestedOneWithoutOwned_ProjectsInput;
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateWithoutUsersInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutProjectInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutProjectInput>;
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutProjectInput>;
  is_disabled: Scalars['Boolean'];
  owner: UserCreateNestedOneWithoutOwned_ProjectsInput;
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutProjectInput>;
  title: Scalars['String'];
  total_time_spent?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  _avg: Maybe<ProjectAvgAggregate>;
  _count: Maybe<ProjectCountAggregate>;
  _max: Maybe<ProjectMaxAggregate>;
  _min: Maybe<ProjectMinAggregate>;
  _sum: Maybe<ProjectSumAggregate>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  end_date: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project_owner_id: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_project: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  due_date: Maybe<Scalars['DateTime']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  private: Maybe<Scalars['Boolean']>;
  project_owner_id: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_project: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type ProjectMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_owner_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  due_date: Maybe<Scalars['DateTime']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  private: Maybe<Scalars['Boolean']>;
  project_owner_id: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_project: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type ProjectMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_owner_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProjectAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProjectCountOrderByAggregateInput>;
  _max?: InputMaybe<ProjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProjectMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProjectSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_owner_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  invitations?: InputMaybe<InvitationOrderByRelationAggregateInput>;
  is_disabled?: InputMaybe<SortOrder>;
  owner?: InputMaybe<UserOrderByWithRelationInput>;
  private?: InputMaybe<SortOrder>;
  project_owner_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_project?: InputMaybe<SortOrder>;
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  DueDate = 'due_date',
  EndDate = 'end_date',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Private = 'private',
  ProjectOwnerId = 'project_owner_id',
  StartDate = 'start_date',
  StatusProject = 'status_project',
  Title = 'title',
  TotalTimeSpent = 'total_time_spent',
  UpdatedAt = 'updated_at'
}

export type ProjectScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  due_date?: InputMaybe<DateTimeFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  private?: InputMaybe<BoolFilter>;
  project_owner_id?: InputMaybe<StringFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_project?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  due_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  end_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  private?: InputMaybe<BoolWithAggregatesFilter>;
  project_owner_id?: InputMaybe<StringWithAggregatesFilter>;
  start_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  status_project?: InputMaybe<EnumStatusWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  total_time_spent?: InputMaybe<IntWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProjectSumAggregate = {
  __typename?: 'ProjectSumAggregate';
  total_time_spent: Maybe<Scalars['Int']>;
};

export type ProjectSumOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type ProjectUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutProjectInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutOwned_ProjectsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithWhereWithoutUsersInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutOwnerInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<ProjectCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ProjectUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type ProjectUpdateOneRequiredWithoutFilesInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<ProjectCreateWithoutFilesInput>;
  update?: InputMaybe<ProjectUpdateWithoutFilesInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutFilesInput>;
};

export type ProjectUpdateOneRequiredWithoutInvitationsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<ProjectCreateWithoutInvitationsInput>;
  update?: InputMaybe<ProjectUpdateWithoutInvitationsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutInvitationsInput>;
};

export type ProjectUpdateOneRequiredWithoutTasksInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<ProjectCreateWithoutTasksInput>;
  update?: InputMaybe<ProjectUpdateWithoutTasksInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutTasksInput>;
};

export type ProjectUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<ProjectCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProjectUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutCommentsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ProjectUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithWhereUniqueWithoutUsersInput = {
  data: ProjectUpdateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutCommentsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutOwned_ProjectsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutFilesInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutProjectInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutOwned_ProjectsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutInvitationsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutProjectInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutOwned_ProjectsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutOwnerInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutProjectInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutTasksInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutProjectInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutOwned_ProjectsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateWithoutUsersInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutProjectInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  due_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutProjectInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutProjectInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutOwned_ProjectsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_project?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutProjectInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ProjectCreateWithoutOwnerInput;
  update: ProjectUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithWhereUniqueWithoutUsersInput = {
  create: ProjectCreateWithoutUsersInput;
  update: ProjectUpdateWithoutUsersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutCommentsInput = {
  create: ProjectCreateWithoutCommentsInput;
  update: ProjectUpdateWithoutCommentsInput;
};

export type ProjectUpsertWithoutFilesInput = {
  create: ProjectCreateWithoutFilesInput;
  update: ProjectUpdateWithoutFilesInput;
};

export type ProjectUpsertWithoutInvitationsInput = {
  create: ProjectCreateWithoutInvitationsInput;
  update: ProjectUpdateWithoutInvitationsInput;
};

export type ProjectUpsertWithoutTasksInput = {
  create: ProjectCreateWithoutTasksInput;
  update: ProjectUpdateWithoutTasksInput;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  due_date?: InputMaybe<DateTimeFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  invitations?: InputMaybe<InvitationListRelationFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  owner?: InputMaybe<UserRelationFilter>;
  private?: InputMaybe<BoolFilter>;
  project_owner_id?: InputMaybe<StringFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_project?: InputMaybe<EnumStatusFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateComment: AggregateComment;
  aggregateFile: AggregateFile;
  aggregateInvitation: AggregateInvitation;
  aggregateNotification: AggregateNotification;
  aggregateProject: AggregateProject;
  aggregateTask: AggregateTask;
  aggregateUser: AggregateUser;
  comment: Maybe<Comment>;
  comments: Array<Comment>;
  file: Maybe<File>;
  files: Array<File>;
  findFirstComment: Maybe<Comment>;
  findFirstFile: Maybe<File>;
  findFirstInvitation: Maybe<Invitation>;
  findFirstNotification: Maybe<Notification>;
  findFirstProject: Maybe<Project>;
  findFirstTask: Maybe<Task>;
  findFirstUser: Maybe<User>;
  groupByComment: Array<CommentGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByInvitation: Array<InvitationGroupBy>;
  groupByNotification: Array<NotificationGroupBy>;
  groupByProject: Array<ProjectGroupBy>;
  groupByTask: Array<TaskGroupBy>;
  groupByUser: Array<UserGroupBy>;
  invitation: Maybe<Invitation>;
  invitations: Array<Invitation>;
  notification: Maybe<Notification>;
  notifications: Array<Notification>;
  project: Maybe<Project>;
  projects: Array<Project>;
  task: Maybe<Task>;
  tasks: Array<Task>;
  user: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryAggregateInvitationArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryAggregateNotificationArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryAggregateProjectArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryAggregateTaskArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstInvitationArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryFindFirstNotificationArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryFindFirstProjectArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  distinct: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having: InputMaybe<CommentScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryGroupByInvitationArgs = {
  by: Array<InvitationScalarFieldEnum>;
  having: InputMaybe<InvitationScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<InvitationOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryGroupByNotificationArgs = {
  by: Array<NotificationScalarFieldEnum>;
  having: InputMaybe<NotificationScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<NotificationOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryGroupByProjectArgs = {
  by: Array<ProjectScalarFieldEnum>;
  having: InputMaybe<ProjectScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<ProjectOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryGroupByTaskArgs = {
  by: Array<TaskScalarFieldEnum>;
  having: InputMaybe<TaskScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<TaskOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryInvitationArgs = {
  where: InvitationWhereUniqueInput;
};


export type QueryInvitationsArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  distinct: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTasksArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Status {
  Fihished = 'FIHISHED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export enum Status_Invitation {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum Status_Notification {
  Read = 'READ',
  Unread = 'UNREAD'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newNotification: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  _count: Maybe<TaskCount>;
  comments: Array<Comment>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files: Array<File>;
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: Project;
  project_id: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['String'];
};


export type TaskCommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type TaskFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  total_time_spent: Maybe<Scalars['Float']>;
};

export type TaskAvgOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type TaskCount = {
  __typename?: 'TaskCount';
  comments: Scalars['Int'];
  files: Scalars['Int'];
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  end_date: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  private: Scalars['Int'];
  project_id: Scalars['Int'];
  start_date: Scalars['Int'];
  status_task: Scalars['Int'];
  title: Scalars['Int'];
  total_time_spent: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type TaskCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type TaskCreateInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutTaskInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project_id: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type TaskCreateManyProjectInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type TaskCreateManyProjectInputEnvelope = {
  data: Array<TaskCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskCreateManyUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project_id: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TaskCreateManyUserInputEnvelope = {
  data: Array<TaskCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TaskCreateManyProjectInputEnvelope>;
};

export type TaskCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>;
};

export type TaskCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<TaskCreateWithoutCommentsInput>;
};

export type TaskCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TaskCreateWithoutFilesInput>;
};

export type TaskCreateOrConnectWithoutCommentsInput = {
  create: TaskCreateWithoutCommentsInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutFilesInput = {
  create: TaskCreateWithoutFilesInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutProjectInput = {
  create: TaskCreateWithoutProjectInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutCommentsInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateWithoutFilesInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutTaskInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateWithoutProjectInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutTaskInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTasksInput;
};

export type TaskCreateWithoutUserInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutTaskInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  files?: InputMaybe<FileCreateNestedManyWithoutTaskInput>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project: ProjectCreateNestedOneWithoutTasksInput;
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy';
  _avg: Maybe<TaskAvgAggregate>;
  _count: Maybe<TaskCountAggregate>;
  _max: Maybe<TaskMaxAggregate>;
  _min: Maybe<TaskMinAggregate>;
  _sum: Maybe<TaskSumAggregate>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  private: Scalars['Boolean'];
  project_id: Scalars['String'];
  start_date: Scalars['DateTime'];
  status_task: Status;
  title: Scalars['String'];
  total_time_spent: Scalars['Int'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type TaskListRelationFilter = {
  every?: InputMaybe<TaskWhereInput>;
  none?: InputMaybe<TaskWhereInput>;
  some?: InputMaybe<TaskWhereInput>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  private: Maybe<Scalars['Boolean']>;
  project_id: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_task: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type TaskMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  end_date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  private: Maybe<Scalars['Boolean']>;
  project_id: Maybe<Scalars['String']>;
  start_date: Maybe<Scalars['DateTime']>;
  status_task: Maybe<Status>;
  title: Maybe<Scalars['String']>;
  total_time_spent: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type TaskMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type TaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_date?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  private?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  project_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  status_task?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_time_spent?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type TaskRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export enum TaskScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  EndDate = 'end_date',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Private = 'private',
  ProjectId = 'project_id',
  StartDate = 'start_date',
  StatusTask = 'status_task',
  Title = 'title',
  TotalTimeSpent = 'total_time_spent',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type TaskScalarWhereInput = {
  AND?: InputMaybe<Array<TaskScalarWhereInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  private?: InputMaybe<BoolFilter>;
  project_id?: InputMaybe<StringFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_task?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type TaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  end_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  private?: InputMaybe<BoolWithAggregatesFilter>;
  project_id?: InputMaybe<StringWithAggregatesFilter>;
  start_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  status_task?: InputMaybe<EnumStatusWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  total_time_spent?: InputMaybe<IntWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  total_time_spent: Maybe<Scalars['Int']>;
};

export type TaskSumOrderByAggregateInput = {
  total_time_spent?: InputMaybe<SortOrder>;
};

export type TaskUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutTaskInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithWhereWithoutProjectInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutUserInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TaskCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type TaskUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TaskCreateWithoutUserInput>>;
  createMany?: InputMaybe<TaskCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TaskUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TaskUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TaskUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<TaskCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TaskUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<TaskUpsertWithoutCommentsInput>;
};

export type TaskUpdateOneWithoutFilesInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<TaskCreateWithoutFilesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TaskUpdateWithoutFilesInput>;
  upsert?: InputMaybe<TaskUpsertWithoutFilesInput>;
};

export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
  data: TaskUpdateWithoutProjectInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutUserInput = {
  data: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutCommentsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateWithoutFilesInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutTaskInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateWithoutProjectInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutTaskInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTasksInput>;
};

export type TaskUpdateWithoutUserInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutTaskInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  end_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutTaskInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  private?: InputMaybe<BoolFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTasksInput>;
  start_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  status_task?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  total_time_spent?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
  create: TaskCreateWithoutProjectInput;
  update: TaskUpdateWithoutProjectInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutUserInput = {
  create: TaskCreateWithoutUserInput;
  update: TaskUpdateWithoutUserInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithoutCommentsInput = {
  create: TaskCreateWithoutCommentsInput;
  update: TaskUpdateWithoutCommentsInput;
};

export type TaskUpsertWithoutFilesInput = {
  create: TaskCreateWithoutFilesInput;
  update: TaskUpdateWithoutFilesInput;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  end_date?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  private?: InputMaybe<BoolFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  project_id?: InputMaybe<StringFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  status_task?: InputMaybe<EnumStatusFilter>;
  title?: InputMaybe<StringFilter>;
  total_time_spent?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Type_Notification {
  Project = 'PROJECT',
  Task = 'TASK'
}

export type User = {
  __typename?: 'User';
  _count: Maybe<UserCount>;
  avatar: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  files: Array<File>;
  first_name: Scalars['String'];
  id: Scalars['String'];
  invitations: Array<Invitation>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications: Array<Notification>;
  notifications_sent: Array<Notification>;
  owned_projects: Array<Project>;
  password: Scalars['String'];
  project_comments: Array<Comment>;
  projects: Array<Project>;
  role: Array<Role>;
  task_comments: Array<Comment>;
  tasks: Array<Task>;
  updated_at: Scalars['DateTime'];
};


export type UserFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type UserInvitationsArgs = {
  cursor: InputMaybe<InvitationWhereUniqueInput>;
  distinct: InputMaybe<Array<InvitationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<InvitationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<InvitationWhereInput>;
};


export type UserNotificationsArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type UserNotifications_SentArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type UserOwned_ProjectsArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  distinct: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type UserProject_CommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type UserProjectsArgs = {
  cursor: InputMaybe<ProjectWhereUniqueInput>;
  distinct: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ProjectWhereInput>;
};


export type UserTask_CommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type UserTasksArgs = {
  cursor: InputMaybe<TaskWhereUniqueInput>;
  distinct: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<TaskWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  files: Scalars['Int'];
  invitations: Scalars['Int'];
  notifications: Scalars['Int'];
  notifications_sent: Scalars['Int'];
  owned_projects: Scalars['Int'];
  project_comments: Scalars['Int'];
  projects: Scalars['Int'];
  task_comments: Scalars['Int'];
  tasks: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  created_at: Scalars['Int'];
  email: Scalars['Int'];
  first_name: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  last_name: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<UserCreateManyroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyroleInput = {
  set: Array<Role>;
};

export type UserCreateNestedManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutProjectsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutProjectsInput>>;
};

export type UserCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateNestedOneWithoutInvitationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<UserCreateWithoutInvitationsInput>;
};

export type UserCreateNestedOneWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateNestedOneWithoutNotifications_SentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotifications_SentInput>;
  create?: InputMaybe<UserCreateWithoutNotifications_SentInput>;
};

export type UserCreateNestedOneWithoutOwned_ProjectsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwned_ProjectsInput>;
  create?: InputMaybe<UserCreateWithoutOwned_ProjectsInput>;
};

export type UserCreateNestedOneWithoutProject_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProject_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutProject_CommentsInput>;
};

export type UserCreateNestedOneWithoutTask_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTask_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutTask_CommentsInput>;
};

export type UserCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<UserCreateWithoutTasksInput>;
};

export type UserCreateOrConnectWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInvitationsInput = {
  create: UserCreateWithoutInvitationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotifications_SentInput = {
  create: UserCreateWithoutNotifications_SentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOwned_ProjectsInput = {
  create: UserCreateWithoutOwned_ProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProject_CommentsInput = {
  create: UserCreateWithoutProject_CommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProjectsInput = {
  create: UserCreateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTask_CommentsInput = {
  create: UserCreateWithoutTask_CommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTasksInput = {
  create: UserCreateWithoutTasksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFilesInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutInvitationsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutNotificationsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutNotifications_SentInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutOwned_ProjectsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProject_CommentsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProjectsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTask_CommentsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTasksInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  invitations?: InputMaybe<InvitationCreateNestedManyWithoutUserInput>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  project_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  role?: InputMaybe<UserCreateroleInput>;
  task_comments?: InputMaybe<CommentCreateNestedManyWithoutUser_Task_CommentsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateroleInput = {
  set: Array<Role>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
  avatar: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role: Maybe<Array<Role>>;
  updated_at: Scalars['DateTime'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invitations?: InputMaybe<InvitationOrderByRelationAggregateInput>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  notifications_sent?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  owned_projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  project_comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  task_comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'created_at',
  Email = 'email',
  FirstName = 'first_name',
  Id = 'id',
  IsDisabled = 'is_disabled',
  LastName = 'last_name',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updated_at'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avatar?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutProjectsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutProjectsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutProjectsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutProjectsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutProjectsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutProjectsInput>>;
};

export type UserUpdateOneRequiredWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  update?: InputMaybe<UserUpdateWithoutFilesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateOneRequiredWithoutInvitationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInvitationsInput>;
  create?: InputMaybe<UserCreateWithoutInvitationsInput>;
  update?: InputMaybe<UserUpdateWithoutInvitationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutInvitationsInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
  update?: InputMaybe<UserUpdateWithoutNotificationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutNotifications_SentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotifications_SentInput>;
  create?: InputMaybe<UserCreateWithoutNotifications_SentInput>;
  update?: InputMaybe<UserUpdateWithoutNotifications_SentInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotifications_SentInput>;
};

export type UserUpdateOneRequiredWithoutOwned_ProjectsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwned_ProjectsInput>;
  create?: InputMaybe<UserCreateWithoutOwned_ProjectsInput>;
  update?: InputMaybe<UserUpdateWithoutOwned_ProjectsInput>;
  upsert?: InputMaybe<UserUpsertWithoutOwned_ProjectsInput>;
};

export type UserUpdateOneRequiredWithoutTasksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<UserCreateWithoutTasksInput>;
  update?: InputMaybe<UserUpdateWithoutTasksInput>;
  upsert?: InputMaybe<UserUpsertWithoutTasksInput>;
};

export type UserUpdateOneWithoutProject_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProject_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutProject_CommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutProject_CommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProject_CommentsInput>;
};

export type UserUpdateOneWithoutTask_CommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTask_CommentsInput>;
  create?: InputMaybe<UserCreateWithoutTask_CommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutTask_CommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTask_CommentsInput>;
};

export type UserUpdateWithWhereUniqueWithoutProjectsInput = {
  data: UserUpdateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutFilesInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInvitationsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotifications_SentInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwned_ProjectsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProject_CommentsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProjectsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTask_CommentsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutUserInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTasksInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  invitations?: InputMaybe<InvitationUpdateManyWithoutUserInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  owned_projects?: InputMaybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  project_comments?: InputMaybe<CommentUpdateManyWithoutUser_Project_CommentsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  task_comments?: InputMaybe<CommentUpdateManyWithoutUser_Task_CommentsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateroleInput = {
  push?: InputMaybe<Array<Role>>;
  set?: InputMaybe<Array<Role>>;
};

export type UserUpsertWithWhereUniqueWithoutProjectsInput = {
  create: UserCreateWithoutProjectsInput;
  update: UserUpdateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  update: UserUpdateWithoutFilesInput;
};

export type UserUpsertWithoutInvitationsInput = {
  create: UserCreateWithoutInvitationsInput;
  update: UserUpdateWithoutInvitationsInput;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
};

export type UserUpsertWithoutNotifications_SentInput = {
  create: UserCreateWithoutNotifications_SentInput;
  update: UserUpdateWithoutNotifications_SentInput;
};

export type UserUpsertWithoutOwned_ProjectsInput = {
  create: UserCreateWithoutOwned_ProjectsInput;
  update: UserUpdateWithoutOwned_ProjectsInput;
};

export type UserUpsertWithoutProject_CommentsInput = {
  create: UserCreateWithoutProject_CommentsInput;
  update: UserUpdateWithoutProject_CommentsInput;
};

export type UserUpsertWithoutTask_CommentsInput = {
  create: UserCreateWithoutTask_CommentsInput;
  update: UserUpdateWithoutTask_CommentsInput;
};

export type UserUpsertWithoutTasksInput = {
  create: UserCreateWithoutTasksInput;
  update: UserUpdateWithoutTasksInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  invitations?: InputMaybe<InvitationListRelationFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  notifications_sent?: InputMaybe<NotificationListRelationFilter>;
  owned_projects?: InputMaybe<ProjectListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  project_comments?: InputMaybe<CommentListRelationFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  task_comments?: InputMaybe<CommentListRelationFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MutateMeMutationVariables = Exact<{ [key: string]: never; }>;


export type MutateMeMutation = { __typename?: 'Mutation', me: { __typename?: 'User', email: string, id: string, first_name: string, last_name: string, avatar: string, role: Array<Role> } };

export type SignInMutationVariables = Exact<{
  data: LoginInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } };

export type SignUpMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } };

export type GetSelfNotificationsQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetSelfNotificationsQuery = { __typename?: 'Query', user: { __typename?: 'User', notifications: Array<{ __typename?: 'Notification', id: string, title: string, content: string, status: Status_Notification, created_at: any, is_disabled: boolean, sender: { __typename?: 'User', first_name: string, last_name: string } }> } };

export type GetAllTasksByProjectQueryVariables = Exact<{
  where: ProjectWhereInput;
}>;


export type GetAllTasksByProjectQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', tasks: Array<{ __typename?: 'Task', id: string, title: string, description: string, status_task: Status, start_date: any, end_date: any }> }> };

export type GetAllAssignedUserProjectsQueryVariables = Exact<{
  where: InputMaybe<ProjectWhereInput>;
}>;


export type GetAllAssignedUserProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, title: string, description: string, owner: { __typename?: 'User', first_name: string, avatar: string, last_name: string } }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, projects: Array<{ __typename?: 'Project', id: string }> }> };

export type GetSelfProfileInformationsQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetSelfProfileInformationsQuery = { __typename?: 'Query', user: { __typename?: 'User', first_name: string, last_name: string, email: string } };

export type GetSelfProjectsQueryVariables = Exact<{
  where: InputMaybe<ProjectWhereInput>;
}>;


export type GetSelfProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, title: string, description: string, users: Array<{ __typename?: 'User', avatar: string, id: string }>, owner: { __typename?: 'User', first_name: string, avatar: string, last_name: string, id: string } }> };

export type GetSelfTasksQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetSelfTasksQuery = { __typename?: 'Query', user: { __typename?: 'User', tasks: Array<{ __typename?: 'Task', id: string, title: string, status_task: Status, description: string, start_date: any, user: { __typename?: 'User', avatar: string, id: string } }> } };

export type GetSelfTasksStatusQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetSelfTasksStatusQuery = { __typename?: 'Query', user: { __typename?: 'User', tasks: Array<{ __typename?: 'Task', status_task: Status }> } };

export type GetSingleSelfTasksQueryVariables = Exact<{
  where: TaskWhereUniqueInput;
}>;


export type GetSingleSelfTasksQuery = { __typename?: 'Query', task: { __typename?: 'Task', title: string, description: string, id: string, status_task: Status, total_time_spent: number, start_date: any, end_date: any, created_at: any, user: { __typename?: 'User', first_name: string, id: string, last_name: string, email: string, role: Array<Role> }, comments: Array<{ __typename?: 'Comment', id: string, content: string, user_task_comments: { __typename?: 'User', first_name: string, last_name: string } }> } };

export type TestSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TestSubscription = { __typename?: 'Subscription', newNotification: string };


export const MutateMeDocument = gql`
    mutation MutateMe {
  me {
    email
    id
    first_name
    last_name
    avatar
    role
  }
}
    `;
export type MutateMeMutationFn = Apollo.MutationFunction<MutateMeMutation, MutateMeMutationVariables>;

/**
 * __useMutateMeMutation__
 *
 * To run a mutation, you first call `useMutateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutateMeMutation, { data, loading, error }] = useMutateMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useMutateMeMutation(baseOptions?: Apollo.MutationHookOptions<MutateMeMutation, MutateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutateMeMutation, MutateMeMutationVariables>(MutateMeDocument, options);
      }
export type MutateMeMutationHookResult = ReturnType<typeof useMutateMeMutation>;
export type MutateMeMutationResult = Apollo.MutationResult<MutateMeMutation>;
export type MutateMeMutationOptions = Apollo.BaseMutationOptions<MutateMeMutation, MutateMeMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($data: LoginInput!) {
  login(data: $data) {
    id
    first_name
    last_name
    email
    avatar
    role
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($data: RegisterInput!) {
  register(data: $data) {
    id
    first_name
    last_name
    email
    avatar
    role
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const GetSelfNotificationsDocument = gql`
    query GetSelfNotifications($where: UserWhereUniqueInput!) {
  user(where: $where) {
    notifications {
      id
      title
      content
      status
      created_at
      is_disabled
      sender {
        first_name
        last_name
      }
    }
  }
}
    `;

/**
 * __useGetSelfNotificationsQuery__
 *
 * To run a query within a React component, call `useGetSelfNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelfNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelfNotificationsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSelfNotificationsQuery(baseOptions: Apollo.QueryHookOptions<GetSelfNotificationsQuery, GetSelfNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelfNotificationsQuery, GetSelfNotificationsQueryVariables>(GetSelfNotificationsDocument, options);
      }
export function useGetSelfNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelfNotificationsQuery, GetSelfNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelfNotificationsQuery, GetSelfNotificationsQueryVariables>(GetSelfNotificationsDocument, options);
        }
export type GetSelfNotificationsQueryHookResult = ReturnType<typeof useGetSelfNotificationsQuery>;
export type GetSelfNotificationsLazyQueryHookResult = ReturnType<typeof useGetSelfNotificationsLazyQuery>;
export type GetSelfNotificationsQueryResult = Apollo.QueryResult<GetSelfNotificationsQuery, GetSelfNotificationsQueryVariables>;
export const GetAllTasksByProjectDocument = gql`
    query getAllTasksByProject($where: ProjectWhereInput!) {
  projects(where: $where) {
    tasks {
      id
      title
      description
      status_task
      start_date
      end_date
    }
  }
}
    `;

/**
 * __useGetAllTasksByProjectQuery__
 *
 * To run a query within a React component, call `useGetAllTasksByProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTasksByProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTasksByProjectQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllTasksByProjectQuery(baseOptions: Apollo.QueryHookOptions<GetAllTasksByProjectQuery, GetAllTasksByProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTasksByProjectQuery, GetAllTasksByProjectQueryVariables>(GetAllTasksByProjectDocument, options);
      }
export function useGetAllTasksByProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTasksByProjectQuery, GetAllTasksByProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTasksByProjectQuery, GetAllTasksByProjectQueryVariables>(GetAllTasksByProjectDocument, options);
        }
export type GetAllTasksByProjectQueryHookResult = ReturnType<typeof useGetAllTasksByProjectQuery>;
export type GetAllTasksByProjectLazyQueryHookResult = ReturnType<typeof useGetAllTasksByProjectLazyQuery>;
export type GetAllTasksByProjectQueryResult = Apollo.QueryResult<GetAllTasksByProjectQuery, GetAllTasksByProjectQueryVariables>;
export const GetAllAssignedUserProjectsDocument = gql`
    query GetAllAssignedUserProjects($where: ProjectWhereInput) {
  projects(where: $where) {
    id
    title
    description
    owner {
      first_name
      avatar
      last_name
    }
  }
}
    `;

/**
 * __useGetAllAssignedUserProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllAssignedUserProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAssignedUserProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAssignedUserProjectsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllAssignedUserProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAssignedUserProjectsQuery, GetAllAssignedUserProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAssignedUserProjectsQuery, GetAllAssignedUserProjectsQueryVariables>(GetAllAssignedUserProjectsDocument, options);
      }
export function useGetAllAssignedUserProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAssignedUserProjectsQuery, GetAllAssignedUserProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAssignedUserProjectsQuery, GetAllAssignedUserProjectsQueryVariables>(GetAllAssignedUserProjectsDocument, options);
        }
export type GetAllAssignedUserProjectsQueryHookResult = ReturnType<typeof useGetAllAssignedUserProjectsQuery>;
export type GetAllAssignedUserProjectsLazyQueryHookResult = ReturnType<typeof useGetAllAssignedUserProjectsLazyQuery>;
export type GetAllAssignedUserProjectsQueryResult = Apollo.QueryResult<GetAllAssignedUserProjectsQuery, GetAllAssignedUserProjectsQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    id
    projects {
      id
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetSelfProfileInformationsDocument = gql`
    query getSelfProfileInformations($where: UserWhereUniqueInput!) {
  user(where: $where) {
    first_name
    last_name
    email
  }
}
    `;

/**
 * __useGetSelfProfileInformationsQuery__
 *
 * To run a query within a React component, call `useGetSelfProfileInformationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelfProfileInformationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelfProfileInformationsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSelfProfileInformationsQuery(baseOptions: Apollo.QueryHookOptions<GetSelfProfileInformationsQuery, GetSelfProfileInformationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelfProfileInformationsQuery, GetSelfProfileInformationsQueryVariables>(GetSelfProfileInformationsDocument, options);
      }
export function useGetSelfProfileInformationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelfProfileInformationsQuery, GetSelfProfileInformationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelfProfileInformationsQuery, GetSelfProfileInformationsQueryVariables>(GetSelfProfileInformationsDocument, options);
        }
export type GetSelfProfileInformationsQueryHookResult = ReturnType<typeof useGetSelfProfileInformationsQuery>;
export type GetSelfProfileInformationsLazyQueryHookResult = ReturnType<typeof useGetSelfProfileInformationsLazyQuery>;
export type GetSelfProfileInformationsQueryResult = Apollo.QueryResult<GetSelfProfileInformationsQuery, GetSelfProfileInformationsQueryVariables>;
export const GetSelfProjectsDocument = gql`
    query GetSelfProjects($where: ProjectWhereInput) {
  projects(where: $where) {
    id
    title
    description
    users {
      avatar
      id
    }
    owner {
      first_name
      avatar
      last_name
      id
    }
  }
}
    `;

/**
 * __useGetSelfProjectsQuery__
 *
 * To run a query within a React component, call `useGetSelfProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelfProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelfProjectsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSelfProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetSelfProjectsQuery, GetSelfProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelfProjectsQuery, GetSelfProjectsQueryVariables>(GetSelfProjectsDocument, options);
      }
export function useGetSelfProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelfProjectsQuery, GetSelfProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelfProjectsQuery, GetSelfProjectsQueryVariables>(GetSelfProjectsDocument, options);
        }
export type GetSelfProjectsQueryHookResult = ReturnType<typeof useGetSelfProjectsQuery>;
export type GetSelfProjectsLazyQueryHookResult = ReturnType<typeof useGetSelfProjectsLazyQuery>;
export type GetSelfProjectsQueryResult = Apollo.QueryResult<GetSelfProjectsQuery, GetSelfProjectsQueryVariables>;
export const GetSelfTasksDocument = gql`
    query GetSelfTasks($where: UserWhereUniqueInput!) {
  user(where: $where) {
    tasks {
      id
      title
      status_task
      description
      start_date
      user {
        avatar
        id
      }
    }
  }
}
    `;

/**
 * __useGetSelfTasksQuery__
 *
 * To run a query within a React component, call `useGetSelfTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelfTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelfTasksQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSelfTasksQuery(baseOptions: Apollo.QueryHookOptions<GetSelfTasksQuery, GetSelfTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelfTasksQuery, GetSelfTasksQueryVariables>(GetSelfTasksDocument, options);
      }
export function useGetSelfTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelfTasksQuery, GetSelfTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelfTasksQuery, GetSelfTasksQueryVariables>(GetSelfTasksDocument, options);
        }
export type GetSelfTasksQueryHookResult = ReturnType<typeof useGetSelfTasksQuery>;
export type GetSelfTasksLazyQueryHookResult = ReturnType<typeof useGetSelfTasksLazyQuery>;
export type GetSelfTasksQueryResult = Apollo.QueryResult<GetSelfTasksQuery, GetSelfTasksQueryVariables>;
export const GetSelfTasksStatusDocument = gql`
    query GetSelfTasksStatus($where: UserWhereUniqueInput!) {
  user(where: $where) {
    tasks {
      status_task
    }
  }
}
    `;

/**
 * __useGetSelfTasksStatusQuery__
 *
 * To run a query within a React component, call `useGetSelfTasksStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelfTasksStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelfTasksStatusQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSelfTasksStatusQuery(baseOptions: Apollo.QueryHookOptions<GetSelfTasksStatusQuery, GetSelfTasksStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelfTasksStatusQuery, GetSelfTasksStatusQueryVariables>(GetSelfTasksStatusDocument, options);
      }
export function useGetSelfTasksStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelfTasksStatusQuery, GetSelfTasksStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelfTasksStatusQuery, GetSelfTasksStatusQueryVariables>(GetSelfTasksStatusDocument, options);
        }
export type GetSelfTasksStatusQueryHookResult = ReturnType<typeof useGetSelfTasksStatusQuery>;
export type GetSelfTasksStatusLazyQueryHookResult = ReturnType<typeof useGetSelfTasksStatusLazyQuery>;
export type GetSelfTasksStatusQueryResult = Apollo.QueryResult<GetSelfTasksStatusQuery, GetSelfTasksStatusQueryVariables>;
export const GetSingleSelfTasksDocument = gql`
    query GetSingleSelfTasks($where: TaskWhereUniqueInput!) {
  task(where: $where) {
    title
    description
    id
    status_task
    total_time_spent
    start_date
    end_date
    created_at
    user {
      first_name
      id
      last_name
      email
      role
    }
    comments {
      id
      content
      user_task_comments {
        first_name
        last_name
      }
    }
  }
}
    `;

/**
 * __useGetSingleSelfTasksQuery__
 *
 * To run a query within a React component, call `useGetSingleSelfTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleSelfTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleSelfTasksQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetSingleSelfTasksQuery(baseOptions: Apollo.QueryHookOptions<GetSingleSelfTasksQuery, GetSingleSelfTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleSelfTasksQuery, GetSingleSelfTasksQueryVariables>(GetSingleSelfTasksDocument, options);
      }
export function useGetSingleSelfTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleSelfTasksQuery, GetSingleSelfTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleSelfTasksQuery, GetSingleSelfTasksQueryVariables>(GetSingleSelfTasksDocument, options);
        }
export type GetSingleSelfTasksQueryHookResult = ReturnType<typeof useGetSingleSelfTasksQuery>;
export type GetSingleSelfTasksLazyQueryHookResult = ReturnType<typeof useGetSingleSelfTasksLazyQuery>;
export type GetSingleSelfTasksQueryResult = Apollo.QueryResult<GetSingleSelfTasksQuery, GetSingleSelfTasksQueryVariables>;
export const TestDocument = gql`
    subscription test {
  newNotification
}
    `;

/**
 * __useTestSubscription__
 *
 * To run a query within a React component, call `useTestSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTestSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTestSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TestSubscription, TestSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TestSubscription, TestSubscriptionVariables>(TestDocument, options);
      }
export type TestSubscriptionHookResult = ReturnType<typeof useTestSubscription>;
export type TestSubscriptionResult = Apollo.SubscriptionResult<TestSubscription>;