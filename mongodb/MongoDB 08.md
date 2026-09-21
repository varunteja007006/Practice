# MongoDB 08

## Lookup

```js
[
    [
        $lookup;{
            from:'', // The collection where you want to start looking up
            localField:'', // The field from the lookup collection mentioned above
            foreignField:'', // The above name of field in another collection that acts as foreign key
            as:'', // Finally what should this result be called
        }
    ]
]
```
