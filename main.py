# Open the file in read mode
with open('names.txt', 'r') as file:
    # Read all lines, strip any whitespace characters, and filter names with exactly 6 characters
    names = [line.strip().upper() for line in file if len(line.strip()) == 6]

# Add quotes around each name
quoted_names = [f'{name}' for name in names]

# Print the resulting array
print(quoted_names)