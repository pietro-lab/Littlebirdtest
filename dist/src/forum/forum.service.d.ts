import { Forum } from './entity/forum.entity';
import { Repository } from 'typeorm';
import { Comment } from '../comment/entity/comment.entity';
import { Response } from 'express';
import { ThemeForum } from './entity/theme-forum.entity';
import { LikeForum } from './entity/like-forum.entity';
export declare class ForumService {
    private readonly forumRepository;
    private readonly commentRepository;
    private readonly themeForumRepository;
    private readonly likeForumRepository;
    constructor(forumRepository: Repository<Forum>, commentRepository: Repository<Comment>, themeForumRepository: Repository<ThemeForum>, likeForumRepository: Repository<LikeForum>);
    getForumByTheme(response: Response, theme_id: number, page: number): Promise<Response | void>;
    getForumByLike(page: number): Promise<Forum[]>;
    getForumByUserLike(user_id: number, page: number): Promise<LikeForum[]>;
    getForumAndComments(response: Response, forum_id: number, page: number): Promise<Response | void>;
    createComment(forum_id: number, comment_content: string, user_id: number): Promise<Response | void>;
    createLike(forum_id: number, user_id: number): Promise<void>;
    removeComment(response: Response, comment_id: number): Promise<Response | void>;
    removeLike(response: Response, forum_id: number, user_id: number): Promise<Response | void>;
}
