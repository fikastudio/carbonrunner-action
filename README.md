# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `jobId`

**Required** The job id - this should be filled from ${{ github.run_id }}

## Outputs

### `runnerId`

The ID of the runner, in case your interested

## Example usage

```yaml
      - uses: fikastudio/carbonrunner-action@main
        with:
          jobId: ${{ github.run_id }}
```
