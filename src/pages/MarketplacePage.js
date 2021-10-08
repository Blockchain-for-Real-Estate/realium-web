import React from "react"
import { Residential } from "./residential"
import { Commercial } from "./commercial"
import { CollapsableSection, MARKETPLACE_FAQS } from "../utilities/collapsable-section"

export function MarketplacePage(props) {
    return (
        <>
            <Residential searchable setNotify={props.setNotify} />
            {/* FAQs */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {MARKETPLACE_FAQS.map(faq => (
                                <CollapsableSection
                                    title={faq.title}
                                    text={faq.text}
                                    key={faq.title}
                                />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
