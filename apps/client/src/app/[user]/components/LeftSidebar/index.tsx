import { useMyGroupsQueryObject } from '@/app/api/users/query';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import LeftSidebarContent from './LeftSidebarContent';
import { prefetchQuery } from '@/shared/util/prefetch';
import {
    countTextStyle,
    countWrapper,
    sidebarWrapper,
    titleStyle,
    titleWrapper,
} from './index.css';
import type { GroupListResponse } from '@/app/api/groups/type';

const UserPageLeftSidebar = async () => {
    const queryObject = useMyGroupsQueryObject();
    const queryClient = await prefetchQuery(queryObject);

    const myGroups = queryClient.getQueryData<GroupListResponse>(queryObject.queryKey);

    const studyCount = Object.values(myGroups).reduce((acc, val) => acc + val.length, 0);

    return (
        <aside className={sidebarWrapper}>
            <div className={titleWrapper}>
                <h2 className={titleStyle}>내가 속한 스터디</h2>
                <div className={countWrapper}>
                    <span className={countTextStyle}>{studyCount}</span>
                </div>
            </div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <LeftSidebarContent />
            </HydrationBoundary>
        </aside>
    );
};

export default UserPageLeftSidebar;