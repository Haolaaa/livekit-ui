"use server";

import { AccessToken } from "livekit-server-sdk";

export async function createStreamerToken(slug: string) {
    const token = new AccessToken(
        process.env.LIVEKIT_API_KEY,
        process.env.LIVEKIT_API_SECRET,
        {
            // HACK: should really be the streamer's name
            identity: slug,
        }
    );

    token.addGrant({
        room: slug,
        roomJoin: true,
        canPublish: true,
        canPublishData: true,
    });

    return await Promise.resolve(token.toJwt());
}

export async function createViewerToken(roomName: string, identity: string) {
    const token = new AccessToken(
        process.env.LIVEKIT_API_KEY,
        process.env.LIVEKIT_API_SECRET,
        {
            identity: identity,
        }
    );

    token.addGrant({
        room: roomName,
        roomJoin: true,
        canPublish: false,
        canPublishData: true,
    });

    return await Promise.resolve(token.toJwt());
}
