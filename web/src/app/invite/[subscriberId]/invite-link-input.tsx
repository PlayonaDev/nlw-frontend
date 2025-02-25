'use client'

import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { LinkIcon, Copy } from "lucide-react";

interface InviteLinkInputProps {
    inviteLink: string
}
export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink);
    }

    return (
        <InputRoot>
            <InputIcon>
                <LinkIcon className='size-5' />
            </InputIcon>

            <InputField defaultValue={inviteLink} readOnly={true} />

            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className='size-5' />
            </IconButton>
        </InputRoot>
    )
}