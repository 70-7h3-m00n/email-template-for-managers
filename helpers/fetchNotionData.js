const { Client } = require('@notionhq/client')

const fetchNotionData = async () => {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_TOKEN
  })

  const notionData = await notion.databases.query({
    database_id: process.env.NOTION_MANAGERS_DB_ID
  })

  const properties = notionData.results.map(item => item.properties || [])

  const managerMonths = properties.map(
    item => item['Месяц'].select?.name || null
  )
  const managerNames = properties.map(
    item => item['Менеджер'].select?.name || null
  )
  const managerPlans = properties.map(item => item['План'].number || null)
  const managerResults = properties.map(
    item => item['Результат'].number || null
  )
  const managerPlansAreCompleted = properties.map(
    item => item['План выполнен'].formula.boolean || null
  )

  const managersData = managerMonths.map((month, idx) => ({
    month: month || null,
    name: managerNames[idx] || null,
    plan: managerPlans[idx] || null,
    result: managerResults[idx] || null,
    planIsCompleted: managerPlansAreCompleted[idx] || null
  }))

  return managersData
}

export default fetchNotionData
