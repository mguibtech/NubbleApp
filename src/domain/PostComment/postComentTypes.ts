// TODO: Primeiramente cirar a estrutura/dados da ai, uma interface

export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  createdAtRelative: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; //106;
  message: string; //'Cubitum nam aro ademptio necessitatibus pel patria comminor.';
  user_id: number; //4;
  post_id: number; //1;
  created_at: string; //'2024-01-13T15:25:22.000-04:00';
  updated_at: string; //'2024-01-13T19:43:55.782-04:00';
  user: {
    id: number; //4;
    first_name: string; //'Marcelo';
    last_name: string; //'Tavares';
    username: string; //'celotavares';
    email: string; //'celotavares@coffstack.com';
    profile_url: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png';
    is_online: boolean; //false;
    full_name: string; //'Marcelo Tavares';
  };
  //   post: {
  //     id: 1;
  //     text: 'Bom dia!';
  //     user_id: 1;
  //     image_url: 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg';
  //     is_fixed: false;
  //     is_activated: true;
  //     created_at: '2024-01-13T19:43:54.771-04:00';
  //     updated_at: '2024-01-13T19:43:54.773-04:00';
  //     status: 'published';
  //     meta: {};
  //   };
  meta: any; //{};
}
