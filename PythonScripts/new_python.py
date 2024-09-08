import os


def scan():
    print("Scanning the folder........")
    file_list = []
    for filename in os.listdir("tuts"):
        file_list.append(filename)
    print(f"Scan end. Files scanned: {len(file_list)}")
    rename(file_list)


def rename(files_list):
    res = []
    print("Scanning the folder........")
    prefix = "vid_"
    count = 1
    for filename in os.listdir("tuts"):
        if filename in files_list:
            new_filename = prefix + str(count) + ".mp4"
            os.rename("tuts/" + filename, new_filename)
            count = count + 1
            res.append({new_filename: "yes"})
    print(f"Renaming Done. Files renamed: {len(res)}")
    print(res)


if __name__ == "__main__":
    print("Beginning to scan the folder.......")
    scan()
