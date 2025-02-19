import { Knex } from 'knex'
import { DBVersion } from '@icalingua/types/SQLTableTypes'

const upg13to14 = async (db: Knex) => {
    await db.schema.alterTable('messages', (table) => {
        try {
            table.index(['subid', 'time'])
        } catch (e) {
            console.error(e)
        }
    })
    await db<DBVersion>('dbVersion').update({ dbVersion: 14 })
}

export default upg13to14
