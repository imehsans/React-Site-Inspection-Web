import React from 'react'
import ListItems from './ListItems'
const LayoutList = () => {
	return (
		<ul>
			<ListItems item={'Home'} itemAddress={'/'} />
			<ListItems
				item={'My Responsibilities'}
				itemAddress={'./responsibilities'}
			/>
			<ListItems
				item={'Observation & Feedback'}
				itemAddress={'./observationFeedback'}
			/>
			<ListItems item={'Incident Management'} itemAddress={'./incidentMgt'} />
			<ListItems
				item={'Audit and Inspection'}
				itemAddress={'./insepectionWeb'}
			/>
			<ListItems item={'Risk Management'} itemAddress={'./riskMgt'} />
			<ListItems item={'Learning Management'} itemAddress={'./learningMgt'} />
			<ListItems item={'Performance Analytics'} itemAddress={'./analytics'} />
		</ul>
	)
}

export default LayoutList
