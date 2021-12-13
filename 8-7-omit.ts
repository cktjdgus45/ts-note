{
    //8-6-pick type의 반대 omit type
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }
    type VideoMetaData = Omit<Video, 'id' | 'title'>; // Omit은 범위제외한 property만 선택.

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..'
        }
    }
    function getVideoMetadata(url: string): VideoMetaData {
        return {
            url,
            data: 'video/mp4',
        }
    }
}