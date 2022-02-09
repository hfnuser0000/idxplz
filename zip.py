import os
import shutil

try:
    os.remove('.next.zip')
except:
    print('Failed to remove .next.zip')
shutil.make_archive('.next', 'zip', '.next')
