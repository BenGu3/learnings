# The Art of PostgreSQL

## Chapter 3 - Writing SQL Queries
- You can't truly abstract business logic out of database queries
- Without indexes, SQL databases use *sequential scans*
- With indexes, SQL databases use *index accessing methods*, which are much faster than *sequential scans*
- With every `insert`, `update`, and `delete`, there is a cost to maintaining indexes
- `pg_stat_statements` shows a general system-wide analysis
- Useful visual tools for `explain`:
    - https://explain.depesz.com
    - http://tatiyants.com/pev/#/about
- Using `explain` for fixing query performance:
    - Use visual tools
    - Check row difference (orders of magnitude) between *estimated* and *effective* numbers.
    - Check for time spent in sequential scans with a filter step
- One query optimization is to return the exact data you need, not all rows required to calculate it.
    
### questions
- In Channels, we use integration tests to test database queries Should we be unit testing them instead?
- Business logic in queries (RoleIQ Leader vs. Channels)?

## Chapter 4 - SQL Toolbox
- Breakdown of SQL (structured query language)
    - DML (data manipulation language) = `insert`, `delete`, `update`
    - DDL (data definition language) = `create`, `alter`, `drop`
    - TCL (transaction control language) = `begin`, `commit`, `rollback`, etc.
    - DCL (data control language) = `grant`, `revoke`
    - maintenance commands = `vaccuum`, `analyze`, `cluster`
    - other commands = `prepare`, `execute`, `explain`, `listen`, `notify`, etc.
    - query = `select`, `table`, `values`, `with`
- `cross join` is a Cartesian (dot) product
- `from` : `where` :: `group by` : `having`
- `except` is a result set operator (like `union all`)
- `null` means *I don't know what this is*
- `window` functions (used when needing to reference peer rows)
    - `array_agg()` builds an array
    - `partition by` allows query to reference peer rows by a common value
- `join` types:
    - `inner join`
    - `outer join` (`left` or `right`)
    - `full outer join` (`left` + `right`)
    - `lateral join`

## Chapter 5 - Data Types
- Postgres `UUID` type is stored in 16 bytes, while a text representation of a UUID is stored in 37 bytes
- For `jsonb`, you can use `@>` (read *contains*)

## Chapter 6 - Data Modeling
> Simple things should be simple, complex things should be possible.
>
> Data structures, not algorithms, are central to programming. 
- Databases cannot interact with each other. If you need two sets of data to interact, but then in separate schemas.
- [Basics of the Unix Philosophy](http://labor-liber.org/en/gnu-linux/introduction/index.php?diapo=unix_philosophy)
- [Normal forms](https://en.wikipedia.org/wiki/Database_normalization)
- Anomalies
    - Update - the same information can be expressed on multiple rows; therefore updates to the relation may result in logical inconsistencies
    - Insertion - there are circumstances in which certain facts cannot be recorded at all
    - Deletion - under certain circumstances, deletion of data representing certain facts necessitates deletion of data representing completely different facts
- Use materialized views when you access the data more often than it changes

## Chapter 7 - Data Manipulation and Concurrency Control
- `returning` is a postgresql feature 
- An `update` actually does `insert` and `delete` under the hood
- `delete` actually marks tuple for deletion. `autodaemon` deletes tuple during auto vacuuming
- `truncate` doesn’t mark tulles for deletion. It actually deletes the data files on disk
- A row is locked when updating and uncommitted
- Data is a first class citizen
