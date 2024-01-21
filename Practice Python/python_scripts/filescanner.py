import os

def folder_scan(folder_path ='./'):
    PATH = [] # list of lists (list of , directory wise files stored in a list)
    if folder_path:
        for (root,dirs,files) in os.walk(folder_path, topdown=True):
            search_path = []
            if len(files) != 0:
                # search_path = [os.path.join(root,file) for file in files ]
                search_path = [os.path.join(file) for file in files ]
                PATH.append(search_path)
        
        return PATH  
    else:
        print("No path given or path is invalid.")
        return PATH

def get_files(list_files):
    PATHS = [] # spread the files
    for i in list_files:
        files = [j for j in i]
        PATHS.extend(files)
    return PATHS

def check_duplicates(file_data):
    device1 = file_data[0] # Ext HDD
    device2 = file_data[1] # D Drive2

    no_of_files_device1 =len(device1)
    no_of_files_device2 =len(device2)

    if no_of_files_device1 > no_of_files_device2:
        print(f"Too much in Ext HDD, {no_of_files_device1} > {no_of_files_device2}")
    else:
        print(f"Too much in D Drive {no_of_files_device2} > {no_of_files_device1}")
    
    set_device1 = set(device1)
    print(len(set_device1))
    set_device2 = set(device2)
    print(len(set_device2))

if __name__ == "__main__":
    folder_path = ['/media/varun/7893798770/TUTS','/mnt/D478C52D78C50F64/TUTS']
    file_data = []
    for i in folder_path:
        list_files = folder_scan(i)
        paths = get_files(list_files)
        file_data.append(paths)

    check_duplicates(file_data)