import React, { useEffect, useState } from "react"
import { Listing } from "./listing"
import { SearchForm } from "./search-form"
// import LoadingWave from "@bit/ngoue.playground.loading-wave"
import { ApiPropertyService } from "data/services/property.service.ts"


// TODO: need to handle different number of listings loaded in
export function Residential(props) {
    //load in residential stuff from server here, until then use dummy data below
    const [listings, setListings] = useState('')
    const [reloadAll, setReload] = useState(0)
    const setNotify = props.setNotify

    useEffect(() => {
        const getAllProperties = async () => {
            let assetApiService = new ApiPropertyService();
            await assetApiService.getAssets().then(
                (res) => {
                    const properties = res.data
                    setListings(properties)
                }
            ).catch(error => {
                setNotify && setNotify({ msg: `There was an error property data.`,
                                        color: 'red',
                                        show: true })
                console.error(`Error: ${error}`)
            })
        }

        getAllProperties()
    }, [setNotify, reloadAll])



    return (
        <>
            {listings ?
            <div className="relative mb-12 sm:mb-24">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto py-12 sm:pb-8 sm:py-24">
                            <div className="text-center">
                                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Explore the marketplace
                                </p>
                                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                                    View the properties that are currently available on the Realium marketplace and choose the best investment for you.
                                </p>
                                {props.searchable &&
                                    <SearchForm resultsSetter={setListings} setNotify={props.setNotify} searchService={"propertyService"} reset={setReload} reloadAll={reloadAll}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {Object.keys(listings).map((key) => (
                            <div key={key} className="l-grid__item">
                                <Listing listing={listings[key]} index={listings[key].propertyId - 1} setNotify={setNotify}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            :
            <div className="content-center flex flex-wrap justify-center py-72">
                {/* <LoadingWave primaryColor="#5C6BF6" secondaryColor="#ABABAB"/> */}
                Loading...
            </div>
            }
        </>
    )
}
