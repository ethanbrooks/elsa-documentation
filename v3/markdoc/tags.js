import {Callout} from '@/components/Callout'
import {QuickLink, QuickLinks} from '@/components/QuickLinks'
import {ScribeHow} from "@/components/ScribeHow";
import {YouTube} from "@/components/YouTube";

const tags = {
    callout: {
        attributes: {
            title: { type: String },
            type: {
                type: String,
                default: 'note',
                matches: ['note', 'warning'],
                errorLevel: 'critical',
            },
        },
        render: Callout,
    },
    figure: {
        selfClosing: true,
        attributes: {
            src: { type: String },
            alt: { type: String },
            caption: { type: String },
        },
        render: ({ src, alt = '', caption }) => (
            <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt}/>
                <figcaption>{caption}</figcaption>
            </figure>
        ),
    },
    'quick-links': {
        render: QuickLinks,
    },
    'quick-link': {
        selfClosing: true,
        render: QuickLink,
        attributes: {
            title: { type: String },
            description: { type: String },
            icon: { type: String },
            href: { type: String },
        },
    },
    'scribe-how': {
        attributes: {
            id: { type: String }
        },
        render: ScribeHow
    },
    'youtube': {
        attributes: {
            id: { type: String }
        },
        render: YouTube
    }
}

export default tags
